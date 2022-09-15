import { Chapter4Level } from "./chapters/chapter4";
import { Chapter5Level } from "./chapters/chapter5";
import { Chapter7Level } from "./chapters/chapter7";
import { CssEditorLevel } from "./chapters/level";
import { completeLevelAndGoNext } from "./game";
import { completeLevel } from "./progress";
import { state, currentChapter } from "./state";
import { cleanupEffects, shake } from "./utils";

export function applyStyles(userRules?: string[]){
  const level = state.level as CssEditorLevel;
  if(!level) return;
  const rootSelector = currentChapter.value.wrapperClass ? `.${currentChapter.value.wrapperClass}` : ""
  const selectors = new Set([level.selector, ...Object.keys(level.cssRules ?? {}), ...Object.keys(level.cssRulesHidden ?? {})])
  
  let styles = "";
  for(let selector of selectors){
    styles += `
${rootSelector} ${selector} {
${[      
    ...(level.cssRules ? level.cssRules[selector] ?? [] : []),
    ...(level.cssRulesHidden ? level.cssRulesHidden[selector] ?? [] : [])
  ].map(rule => `  ${rule};`).join("\n")}
}`
  }

  if(userRules && userRules.length > 0){
    styles += `
${rootSelector} ${level.selector} {
  ${userRules.join("\n")}
}`
  }

  const stylesheet = document.getElementById("css-editor-stylesheet")!
  stylesheet.innerHTML = styles
 
}

export function applyUserRules(rules: string[]) {
  const level = state.level as (Chapter4Level | Chapter5Level | Chapter7Level);

  cleanupEffects();

  const gameWrapper = document.querySelector(".game-wrapper")!;
  const targets: HTMLElement[] = Array.from(
    gameWrapper.querySelectorAll(level.selector)
  );

  applyStyles(rules)

  let win = checkStyleProperties(rules, level);
  if (win) {
    gameWrapper.classList.add("win");
    targets.forEach((el) => {
      el.classList.remove("strobe");
    });

    setTimeout(function () {
      gameWrapper.classList.remove("win");
      completeLevelAndGoNext();
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
    .replace(/;$/, "")
    .trim()
}

function checkStyleProperties(
  rules: string[],
  level: (Chapter4Level | Chapter5Level | Chapter7Level)
) {
  if (!level.check) return true;
  const props = Object.fromEntries(rules
    .map(rule => [rule.split(":")[0], rule.split(":")[1]])
    .map(([prop, value]) => [prop.trim(), normalizePropValue(value)])
  )
  return level.check.every(([prop, ...possibleValues]) => {
    const value = props[prop]
    return possibleValues.some(expected => {
      expected = normalizePropValue(expected)
      if (typeof value === "string" && value === expected) return true;
      else if (typeof expected === "function" && expected(value)) return true;
      console.log(`Expected ${prop} to be ${expected}, got ${value}`);
      return false;
    })
  })
}
