import {state, completeLevel} from "../game";
import { cleanupEffects, shake } from "../utils";
import { Level } from "./level";

import LayoutGame from "../components/LayoutGame.vue";
import Chapter2LevelInstructions from "../components/Chapter2LevelInstructions.vue";
import { Chapter } from "./chapter";
import {nextTick} from "vue";
import { addBoardElementsTooltips } from "../tooltip";


export function applyStyle(selector: string, rules: string) {
  const level = state.level as Chapter4Level;

  cleanupEffects();

  // var baseTable = $('.table-wrapper > .table, .table-wrapper > .nametags, .table-wrapper > .table-surface');
  const baseTable = document.querySelector('.table-board')!;
  const targets: HTMLElement[] = Array.from(baseTable.querySelectorAll(selector));

  targets.forEach(el => el.setAttribute("style", level.existingStyles+rules))

  let win = checkResults(targets, level);

  if (win) {
    targets.forEach((el) => {
      el.classList.remove("strobe");      
    });
    const editorInput = document.querySelector(
      ".editor input"
    ) as HTMLInputElement;
    editorInput.value = "";

    setTimeout(function () {
      completeLevel();
    }, 1000);
  } else {
    targets.forEach((el) => {
      el.classList.remove("strobe");
      shake(el)
    });
  }
}

function checkResults(elementsToCheck: HTMLElement[], level: Chapter4Level) {
  if(!level.check) return true
  return level.check.every(([prop,value]) => elementsToCheck.every(el => {
    const style = getComputedStyle(el)
    if(style.getPropertyValue(prop) === value) return true;
    console.log(`Expected ${prop} to be ${value}, got ${style.getPropertyValue(prop)}`);
    return false;
  }))
}

export interface Chapter4Level extends Level {
  doThis: string;
  selector: string;
  syntax?: string;
  help?: string;
  helpTitle?: string;
  examples?: string[];
  existingStyles?: string;
  check: [string, string][];
}

export const chapter4Levels: Chapter4Level[] = [
  {
    name: "Block display and line breaking",
    doThis: "Put the plates vertically",
    selector: "plate",
    existingStyles: ``,
    syntax: "display: block",
    help: `<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li><b>The box will break onto a new line.</b></li>
    </ul>
    </p>`,
    markup: `
<plate></plate>
<plate></plate>
<plate></plate>
<plate></plate>
    `,
    check: [
      ["display","block"]
    ]
  },
  {
    name: "Margins with block elements",    
    doThis: "Add a 20px margin between plates",
    selector: "plate",
    existingStyles: `  display: block;`,
    syntax: `margin: <top> <right> 
        <bottom> <left> 
margin: <top and bottom> 
        <right and left>
margin: <all>`,
    help: `<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>The box will break onto a new line.</li>
    <li><b>Padding, margin and border will cause other elements to be pushed away from the box.</b></li>
    </ul>
    </p>`,
    examples:  [
      '<strong>margin: 1em</strong> applies a 1em margin on all sides of the box',
      '<strong>margin: 0 auto</strong> removes the vertical margin and make horizontal margins auto-fill the available space around the box.</strong>',
    ],
    markup: `
<plate></plate>
<plate></plate>
<plate></plate>
<plate></plate>
    `,
    check: [
      ["margin-top","20px"],
      ["margin-bottom","20px"]
    ]
  },
  {
    name: "Width and height",
    helpTitle: "Dimensioning a block element",
    doThis: "Make the plate 100px wide",
    selector: "plate",
    existingStyles: `  display: block;
  height: 100px;
  width: auto;`,
    syntax: "width: <value><unit>;",
    help: `<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>The box will break onto a new line.</li>
    <li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
    <li><b>The width and height properties are respected. If not specified, the box will extend in the inline direction to fill the space available in its container.</b></li>
    </ul>
    </p>`,
    markup: `
<bento style="width:300px">
  <plate></plate>
</bento>
    `,
    check: [
      ["width","100px"]
    ]
  },
];

export const chapter4: Chapter = {
  name: "CSS - Layout",
  levels: chapter4Levels,
  leftPanelComponent: LayoutGame,
  rightPanelComponent: Chapter2LevelInstructions,
  credits: `Credits: <a href="https://github.com/thomaspark">Thomas Park</a> for its inspiring <a target="_blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a> game.`,
  intro: `<p>Let's learn the different ways to position elements in CSS !</p>`,
  onLevelStart(){
    const level = state.level as Chapter4Level    
    document.querySelector("input")?.focus();
    nextTick(() => {
      addBoardElementsTooltips()
      const table = document.querySelector('.table-board');
      if(!table) return;
      const targets: HTMLElement[] = Array.from(table.querySelectorAll(level.selector));
      targets.forEach(el => el.setAttribute("style", level.existingStyles ?? ""))
    })
  }
}


