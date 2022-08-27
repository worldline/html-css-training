import { Chapter2Level } from "./chapters/chapter2";
import { Chapter4Level } from "./chapters/chapter4";
import { Chapter5Level } from "./chapters/chapter5";
import { state, completeLevel } from "./game";
import { cleanupEffects, shake } from "./utils";

export function fireRule(rule: string) {
  const level = state.level as Chapter2Level;

  cleanupEffects();

  const baseTable = document.querySelector(".table-content")!;

  // Check if selector will throw an error trying the mystery rule
  // If it errors out, change the rule to null so the wrong-guess animation will work
  try {
    baseTable.querySelectorAll(rule);
  } catch (err) {
    rule = "";
  }

  const matches = rule
    ? (Array.from(baseTable.querySelectorAll(rule)) as HTMLElement[])
    : []; // What the person finds
  const solutionMatches = Array.from(
    baseTable.querySelectorAll(level.selector)
  ); // What the correct rule finds

  let win = false;

  // If nothing is selected
  if (matches.length == 0) {
    shake(document.querySelector(".editor")!);
  }

  if (matches.length === solutionMatches.length && matches.length > 0) {
    win = checkMatches(matches, solutionMatches);
  }

  if (win) {
    matches.forEach((el) => {
      el.classList.remove("strobe");
      el.classList.add("clean");
    });
    const editorInput = document.querySelector(
      ".editor input"
    ) as HTMLInputElement;
    editorInput.value = "";

    //$(".input-wrapper").css("opacity",.2);
    setTimeout(function () {
      completeLevel();
    }, 1000);
  } else {
    matches.forEach((el) => {
      el.classList.remove("strobe");
      shake(el);
    });

    setTimeout(function () {
      cleanupEffects();
      solutionMatches.forEach((el) => {
        el.classList.add("strobe");
      });
    }, 500);
  }
}

function checkMatches(matches: Element[], solutionMatches: Element[]) {
  return (
    matches.length === solutionMatches.length &&
    matches.every((el) => solutionMatches.includes(el))
  );
}

export function applyStyle(selector: string, rules: string) {
  const level = state.level as (Chapter4Level | Chapter5Level);

  cleanupEffects();

  const gameWrapper = document.querySelector(".game-wrapper")!;
  const baseTable = document.querySelector(".table-content")!;
  const targets: HTMLElement[] = Array.from(
    baseTable.querySelectorAll(selector)
  );

  targets.forEach((el) =>
    el.setAttribute(
      "style",
      [
        el.getAttribute("data-existing-style") ?? "",
        ...(level.cssRules[level.selector] ?? []),
        rules,
      ].join(";")
    )
  );

  let win = checkStyleProperties(targets, level);

  if (win) {
    gameWrapper.classList.add("win");
    targets.forEach((el) => {
      el.classList.remove("strobe");
    });

    setTimeout(function () {
      gameWrapper.classList.remove("win");
      completeLevel();
    }, 1500);
  } else {
    targets.forEach((el) => {
      el.classList.remove("strobe");
      shake(document.querySelector(".table-content")!);
    });
  }
}

function normalizePropValue(val: any){
  if(typeof val !== "string") return val
  return val
    .replaceAll(/,\s+/g, ",")
    .replaceAll(/\s*\/\s*/g, "/")
    .trim()
}

function checkStyleProperties(
  elementsToCheck: HTMLElement[],
  level: (Chapter4Level | Chapter5Level)
) {
  if (!level.check) return true;
  return level.check.every(([prop, ...possibleValues]) =>
    elementsToCheck.every((el: HTMLElement) => possibleValues.some(expected => {
      expected = normalizePropValue(expected)
      const value = normalizePropValue(el.style.getPropertyValue(prop));
      if (typeof value === "string" && value === expected) return true;
      else if (typeof expected === "function" && expected(value)) return true;
      console.log(`Expected ${prop} to be ${expected}, got ${value}`);
      return false;
    }))
  )
}
