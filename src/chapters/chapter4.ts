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

  targets.forEach(el => el.setAttribute("style", [
    el.getAttribute("data-existing-style") ?? "",
    level.existingStyles ?? "",
    rules
  ].join(";")))

  let win = checkResults(targets, level);

  if (win) {
    targets.forEach((el) => {
      el.classList.remove("strobe");      
    });

    setTimeout(function () {
      completeLevel();
    }, 1500);
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
    if(el.style[prop] === value) return true;
    console.log(`Expected ${prop} to be ${value}, got ${el.style[prop]}`);
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
  tableStyles?: string;
  check: [string, string][];
}

export const chapter4Levels: Chapter4Level[] = [
  {
    name: "Box Model: margins",
    doThis: "Add a 50px right margin to bentos",
    selector: "bento",
    syntax: `margin: <val><unit>
margin-<dir>: <val><unit>`,
    examples: [
      `<code>margin: 1em</code> adds a 1em margin on all sides of the element`,      
      `<code>margin: 0 20px</code> adds a 20px horizontal margin and zero vertical margin`,
      `<code>margin-top: 10px</code> adds a 10px margin at the top of the element`
    ],
    help: `<p>Margins are used to add space <b>outside</b> the element.</p>
    <img src="img/boxmodel.png" alt="Box Model" />`,
    markup: `
    <bento>
      <plate></plate>
    </bento>
    <bento>
      <plate></plate>
      <plate></plate>
    </bento>
    <bento>
      <plate></plate>
    </bento>
    `,
    check: [
      ["marginRight","50px"]
    ]
  },
  {
    name: "Box Model: padding",
    doThis: "Add a 20px padding to bentos",
    selector: "bento",
    syntax: "padding: <val><unit>",
    existingStyles: "  margin-right: 50px;",
    examples: [
      `<code>padding: 1em</code> adds a 1em padding on all sides of the element`,      
      `<code>padding: 0 20px</code> adds a 20px horizontal padding and zero vertical padding`,
      `<code>padding-top: 10px</code> adds a 10px padding at the top of the element`
    ],
    help: `<p>Padding is used to add internal margins and have space between the border of the element and its content.</p>
    <img src="img/boxmodel.png" alt="Box Model" />`,
    markup: `
    <bento>
      <plate></plate>
    </bento>
    <bento>
      <plate></plate>
      <plate></plate>
    </bento>
    <bento>
      <plate></plate>
    </bento>
    `,
    check: [
      ["padding","20px"]
    ]
  },
  {
    name: "Box Model: borders",
    doThis: "Extend the border width of bentos to 10px",
    selector: "bento",
    syntax: "border-width: <val><unit>",
    existingStyles: `  margin-right: 50px;
  padding: 20px;`,
    examples: [
      `<code>border: 1px solid black</code> adds a 1 pixel width black solid border`,
      `<code>border-width: 20px</code> sets the border width to 20px while preserving existing border styles`
    ],
    help: `<p>Borders are the visual boundaries of an element's box. They can be styled in many ways.</p>
    <p>By default, the width and height of an element does not count the border width, but only the size of the content box. This behavior can be changed with the property <code>box-sizing: border-box</code> (initially <code>content-box</code>).</p>
    <img src="img/boxmodel.png" alt="Box Model" />`,
    markup: `
    <bento>
      <plate></plate>
    </bento>
    <bento>
      <plate></plate>
      <plate></plate>
    </bento>
    <bento>
      <plate></plate>
    </bento>
    `,
    check: [
      ["borderWidth","10px"]
    ]
  },
  {
    name: "Block display and line breaking",
    doThis: "Put the plates vertically",
    selector: "plate",
    tableStyles: `width: 500px; height: 500px`,
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
    doThis: "Add a 20px margin between plates and center them horizontally on the table",
    selector: "plate",
    tableStyles: `width: 500px; height: 500px`,
    existingStyles: `  display: block;`,
    syntax: `margin: <top and bottom> 
        <right and left>`,
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
      ["margin","20px auto"]
    ]
  },
  {
    name: "Width and height",
    helpTitle: "Dimensioning a block element",
    doThis: "Make all the plates 100px wide",
    selector: "plate",    
    existingStyles: `  display: block;
  height: 100px;
  width: auto;`,
    syntax: "width: <value><unit>;",
    help: `<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>The box will break onto a new line.</li>
    <li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
    <li>You can set fixed <code>width</code> and <code>height</code> properties. If not specified, the box will extend in the inline direction to fill the space available in its container (width: 100%).</b></li>
    </ul>
    </p>`,
    markup: `
<bento style="width:200px; height: 150px;"><plate></plate></bento>
<bento style="width:300px; height: 200px;"><plate></plate></bento>
<bento style="width:400px; height: 300px;"><plate></plate></bento>
    `,
    check: [
      ["width","100px"]
    ]
  },
  {
    name: "Auto margins",    
    doThis: "Set all margins to auto",
    selector: "plate",
    existingStyles: `  display: block;
  height: 100px;
  width: 100px;`,
    syntax: "margin: auto;",
    help: `<p>For <b>block</b> elements, margins with <code>auto</code> value are computed differently between top/bottom and left/right.</p>
    <p>For <b>left and right margins</b>, auto makes the margin <b>fill all the available space</b>. This only works if the element has a specified width lower than its parent container width, so that there is space for margins.</p>
    <p>For <b>top and bottom margins</b>, auto is resolved as <b>zero</b>. In fact, the nature of document flow and element height calculation algorithms make it impossible to use margins for centering an element vertically inside its parent. Whenever a vertical margin's value is changed, it will trigger a parent element height re-calculation (re-flow), which would in turn trigger a re-center of the original element... making it an infinite loop.`,
    markup: `
    <bento style="width:200px; height: 150px;"><plate></plate></bento>
    <bento style="width:300px; height: 200px;"><plate></plate></bento>
    <bento style="width:400px; height: 300px;"><plate></plate></bento>
    `,
    check: [
      ["margin","auto"]
    ]
  },
  {
    name: "Inline block display",    
    doThis: "Align the bentos at the top side of the table",
    selector: "plate",
    existingStyles: `  display: block;
  height: 100px;
  width: 100px;
  margin: auto;`,
    syntax: `display: inline-block;`,
    help: `<p>If an element has a display type of <code>inline-block</code>, then it has a behavior in between <code>inline</code> and <code>block</code>:
<ul>
  <li>The box does <b>not</b> break onto a new line, it will try to fit on the same line than its siblings elements.</li>
  <li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
  <li>You can set fixed <code>width</code> and <code>height</code> properties. If not specified, the box will extend to be <b>as large as its content</b>.</li>
  <li>By default, the box will be vertically aligned according to the <b>baseline</b>.</li>
</ul>
</p>
<img src="img/baseline1.png" alt="Baseline with inline-block elements with text" />
<p>When the element has no text or other inline content, the baseline is set to its bottom edge:</p>
<img src="img/baseline2.png" alt="Baseline with inline-block elements without text" />
<p>In this example, <tag>bento</tag> elements are already <code>inline-block</code>, but plates being <code>block</code> change the baseline to the bottom edge.`,
    markup: `
    <bento style="width:200px; height: 150px;"><plate></plate></bento>
    <bento style="width:300px; height: 200px;"><plate></plate></bento>
    <bento style="width:400px; height: 300px;"><plate></plate></bento>
    `,
    check: [
      ["margin","auto"]
    ]
  },
  {
    name: "Inline block vertical align",    
    doThis: "Align the bentos at the middle of the table",
    selector: "bento",
    existingStyles: `  display: inline-block;`,
    syntax: `vertical-align: <align>;`,
    help: `<p>The <code>vertical-align</code> changes the way an inline-block element is vertically aligned relatively to the baseline. It can take the following values:</p>    
<ul>
  <li><code>baseline</code> (default)</li>
  <li><code>sub</code> (used by subscript<sub>like that</sub>)</li>
  <li><code>super</code> (used by superscript<sup>like that</sup>)</li>
  <li><code>text-top</code> or <code>text-bottom</code>: top or bottom of the text line</li>
  <li><code>middle</code>: aligns the middle of the element with the middle of the line height added to the baseline</li>
  <li>a custom length or percentage</li>
</ul>
</p>
`,
    markup: `
    <bento style="width:200px; height: 150px;"><plate></plate></bento>
    <bento style="width:300px; height: 200px;"><plate></plate></bento>
    <bento style="width:400px; height: 300px;"><plate></plate></bento>
    `,
    check: [
      ["verticalAlign","middle"]
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

      const editorInput = document.querySelector(
        ".editor input"
      ) as HTMLInputElement;
      editorInput.value = "";

      const table = document.querySelector('.table-board');
      if(!table) return;
      table.setAttribute("style", level.tableStyles ?? "")
      const targets: HTMLElement[] = Array.from(table.querySelectorAll(level.selector));
      targets.forEach(el => {
        el.setAttribute("data-existing-style", el.getAttribute("style") ?? "")
        el.setAttribute("style", [el.getAttribute("style"), level.existingStyles ?? ""].join(";"))
      })
    })
  }
}


