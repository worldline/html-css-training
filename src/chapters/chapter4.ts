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
    ...level.cssRules[level.selector] ?? [],
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
      shake(document.querySelector(".table")!)
    });
  }
}

function checkResults(elementsToCheck: HTMLElement[], level: Chapter4Level) {
  if(!level.check) return true
  return level.check.every(([prop, expected]) => elementsToCheck.every((el: HTMLElement) => {
    const value = el.style.getPropertyValue(prop);
    if(typeof value === "string" && value === expected) return true;
    else if(typeof expected === "function" && expected(value)) return true;
    console.log(`Expected ${prop} to be ${expected}, got ${value}`);
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
  cssRules: { [selector:string]: string[] };
  tableStyles?: string;
  check: [string, string | ((val: string) => boolean)][];
  hintMarkup?: string;
}

export const chapter4Levels: Chapter4Level[] = [
  {
    name: "Block display and line breaking",
    doThis: "Put the bentos vertically on top of each other",
    selector: "bento",
    tableStyles: `width: 800px; height: 360px`,
    cssRules: {},
    syntax: "display: block",
    help: `<p>Block is the default display mode of paragraphs and sectionning elements like <tag>div</tag>, <tag>main</tag>, <tag>article</tag> etc.</p>
    <p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li><b>The box will break onto a new line.</b></li>
    <li>The box will, by default, extend in the inline direction to fill the space available in its container (<b>width: 100%</b>).</li>
    <li>...</li>
    </ul>
    </p>`,
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["display","block"]
    ]
  },
  {
    name: "Box Model: margins",
    doThis: "Add a 20px bottom margin to bentos",
    selector: "bento",
    tableStyles: `width: 800px; height: 360px`,
    cssRules: {
      "bento": ["display: block"]
    },
    syntax: `margin: <val><unit>
margin-<dir>: <val><unit>`,
    examples: [
      `<code>margin: 1em</code> adds a 1em margin on all sides of the element`,      
      `<code>margin: 0 20px</code> adds a 20px horizontal margin and zero vertical margin`,
      `<code>margin-top: 10px</code> adds a 10px margin at the top of the element`
    ],
    help: `<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>It will break onto a new line.</li>
    <li>It will, by default, extend in the inline direction to fill the space available in its container (width: 100%).</li>
    <li>It will follow the <b>box model</b>: <img src="img/boxmodel.png" alt="Box Model" /></li>
    </ul>
    </p>    
    <p>Margins are used to add space <b>outside</b> the element.</p>
    `,
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["margin-bottom","20px"]
    ]
  },
  {
    name: "Box Model: padding",
    doThis: "Add a 10px padding to bentos",
    selector: "bento",
    syntax: "padding: <val><unit>",
    tableStyles: `width: 800px; height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px"]
    },
    examples: [
      `<code>padding: 1em</code> adds a 1em padding on all sides of the element`,      
      `<code>padding: 0 20px</code> adds a 20px horizontal padding and zero vertical padding`,
      `<code>padding-top: 10px</code> adds a 10px padding at the top of the element`
    ],
    help: `<p>Box model: <img src="img/boxmodel.png" alt="Box Model" /></p>
    <p>Padding is used to add internal margins and have space between the border of the element and its content.</p>`,
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["padding","10px"]
    ]
  },
  {
    name: "Box Model: borders",
    doThis: "Extend the border width of bentos to 10px",
    selector: "bento",
    syntax: "border-width: <val><unit>",
    tableStyles: `width: 800px; height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px"]
    },
    examples: [
      `<code>border: 1px solid black</code> adds a 1 pixel width black solid border`,
      `<code>border-width: 20px</code> sets the border width to 20px while preserving existing border styles`
    ],
    help: `<p>Borders are the visual boundaries of an element's box. They can be styled in many ways.</p>
    <p>By default, the width and height of an element does not count the border width, but only the size of the content box. This behavior can be changed with the property <code>box-sizing: border-box</code> (initially <code>content-box</code>).</p>
    <img src="img/boxmodel.png" alt="Box Model" />`,
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["border-width","10px"]
    ]
  },  
  {
    name: "Width and height",
    helpTitle: "Dimensioning a block element",
    doThis: "Make all the bentos 250px wide",
    selector: "bento",    
    tableStyles: `width: 800px; height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px", "border-width: 10px"]
    },
    syntax: "width: <value><unit>;",
    help: `<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>The box will break onto a new line.</li>
    <li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
    <li>You can set fixed <code>width</code> and <code>height</code> properties.</b></li>
    </ul>
    </p>`,
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["width","250px"]
    ]
  },
  {
    name: "Auto margins",    
    doThis: "Set all margins to auto",
    selector: "bento",    
    tableStyles: `width: 800px; height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px", "border-width: 10px", "width: 250px"]
    },
    syntax: "margin: auto;",
    help: `<p>For <b>block</b> elements, margins with <code>auto</code> value are computed differently between top/bottom and left/right.</p>
    <p>For <b>left and right margins</b>, auto makes the margin <b>fill all the available space</b>. This only works if the element has a specified width lower than its parent container width, so that there is space for margins.</p>
    <p>For <b>top and bottom margins</b>, auto is resolved as <b>zero</b>. In fact, the nature of document flow and element height calculation algorithms make it impossible to use margins for centering an element vertically inside its parent. Whenever a vertical margin's value is changed, it will trigger a parent element height re-calculation (re-flow), which would in turn trigger a re-center of the original element... making it an infinite loop.`,
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["margin","auto"]
    ]
  },
  {
    name: "Margins with block elements",    
    doThis: "Add a 20px vertical margin between bentos and center them horizontally",
    selector: "bento",
    tableStyles: `width: 800px; height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px", "border-width: 10px", "width: 250px"]
    },
    syntax: `margin: <top and bottom> 
        <right and left>`,
    help: `<p>If an element has a display type of <code>block</code>, then:
    <ul>
    <li>The box will break onto a new line.</li>
    <li><b>Padding, margin and border will cause other elements to be pushed away from the box.</b></li>
    <li>...</li>
    </ul>
    </p>`,
    examples:  [
      '<strong>margin: 1em</strong> applies a 1em margin on all sides of the box',
      '<strong>margin: 0 auto</strong> removes the vertical margin and make horizontal margins auto-fill the available space around the box.</strong>',
    ],
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["margin","20px auto"]
    ]
  },
  {
    name: "Inline block display",    
    doThis: "Line up the bentos horizontally",
    selector: "bento",
    tableStyles: `width: 800px; height: 360px`,
    wrapperClass: "va-initial",
    cssRules: {
      "bento": ["display: block", "padding: 10px", "border-width: 10px", "width: 250px", "margin: 20px auto"]
    },
    syntax: `display: inline-block;`,
    help: `<p>If an element has a display type of <code>inline-block</code>, then it has a behavior in between <code>inline</code> and <code>block</code>:
<ul>
  <li>The box does <b>not</b> break onto a new line, it will try to fit on the same line than its siblings elements.</li>
  <li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
  <li>You can set fixed <code>width</code> and <code>height</code> properties. If not specified, the box will extend to be <b>as large as its content</b>.</li>
</ul>`,
    markup: `
    <bento>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    <bento>
      <sushi></sushi>
    </bento>
    `,
    check: [
      ["display","inline-block"]
    ]
  },
  {
    name: "Inline block display",    
    doThis: "Align the bentos on the top edge",
    selector: "plate",
    wrapperClass: "va-initial",
    tableStyles: `width: 600px; height: 300px`,
    cssRules: {
      "bento": ["display: inline-block"],    
      "plate": ["display: block", "width: 100px", "height: 100px", "margin-bottom: 20px"]
    },
    syntax: `display: inline-block;`,
    help: `<p>By default, an <code>inline-block</code> box will be vertically aligned according to the current <b>baseline</b>.</p>
</p>
<img src="img/baseline1.png" alt="Baseline with inline-block elements with text" />
<p>When the element has no text or other inline content, the baseline is set to its bottom edge:</p>
<img src="img/baseline2.png" alt="Baseline with inline-block elements without text" />
<p>In this example, <tag>bento</tag> elements are already <code>inline-block</code>, but plates being <code>block</code> change the baseline to the bottom edge.`,
    markup: `
    <bento style="height: 150px;"><plate></plate></bento>
    <bento style="height: 300px;">
      <plate></plate>
      <plate></plate>
    </bento>
    <bento style="height: 200px;"><plate></plate></bento>
    `,
    check: [
      ["display","inline-block"]
    ]
  },
  {
    name: "Inline block vertical align",    
    doThis: "Align vertically the bentos at the middle of the table",
    selector: "bento",
    wrapperClass: "va-initial",
    tableStyles: `width: 600px; height: 300px`,
    cssRules: {
      "bento": ["display: inline-block"]
    },
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
<p>It only works for <b>inline-block</b> elements !</p>
`,
    markup: `
    <bento style="height: 150px;"><plate></plate></bento>
    <bento style="height: 300px;">
      <plate></plate>
      <plate></plate>
    </bento>
    <bento style="height: 200px;"><plate></plate></bento>
    `,
    check: [
      ["vertical-align","middle"]
    ]
  },
  {
    name: "Flex display",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {},
    syntax: `display: flex;`,
    help: `<p><code>flex</code> is another display mode for elements that is more powerful than <b>block</b>. Flex is used to specify <b>how the children of an element should occupy the space </b> they have in that element.</p>
    <p>Flex layouts should be used when you want to distribute elements along one axis, be it horizontal or vertical.</p>
    <p>By default, flex elements have this behavior:
    <ul>
    <li>The items display in a row: <code>flex-direction: row</code></li>
    <li>The items start from the start edge of the main axis: <code>justify-content: flex-start</code></li>
    <li>The items do not stretch on the main axis by default, but can shrink if necessary: <code>flex: 1 0 auto</code></li>
    <li>The items will, by default, stretch to fill the size of the cross axis: <code>align-items: stretch</code></li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    check: [
      ["display","flex"]
    ]
  },
  {
    name: "Flex: justify-content 1/4",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `justify-content: <value>;`,
    help: `<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal space between <b>and around</b> them.</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: flex-end">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    check: [
      ["justify-content","flex-end"]
    ]
  },
  {
    name: "Flex: justify-content 2/4",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `justify-content: <value>;`,
    help: `<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal space between <b>and around</b> them.</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: center">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    check: [
      ["justify-content","center"]
    ]
  },
  {
    name: "Flex: justify-content 3/4",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `justify-content: <value>;`,
    help: `<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal space between <b>and around</b> them.</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: space-around">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    check: [
      ["justify-content","space-around"]
    ]
  },
  {
    name: "Flex: justify-content 4/4",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `justify-content: <value>;`,
    help: `<p><code>justify-content</code> let you choose how items should be spread on the main axis (the horizontal axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the flex axis (left by default)</li>
    <li><code>flex-end</code> : items align on the end of the flex axis (right by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal space between <b>and around</b> them.</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: space-between">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    check: [
      ["justify-content","space-between"]
    ]
  },
  {
    name: "Flex: align-items",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `align-items: <value>;`,
    help: `<p><code>align-items</code> let you choose how items are aligned relatively to the cross axis (the vertical axis by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>flex-start</code> : items align on the start of the cross axis (top by default)</li>
    <li><code>flex-end</code> : items align on the end of the cross axis (bottom by default)</li>
    <li><code>center</code> : items align on the center of the container</li>
    <li><code>space-between</code> : items are displayed with equal space between them</li>
    <li><code>space-around</code> : items are displayed with equal space between <b>and around</b> them.</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="align-items: flex-end">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    check: [
      ["align-items","flex-end"]
    ]
  },
  {
    name: "Flex positionning 1/2",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `justify-content: <value>;
align-items: <value>;`,
    help: `<p>Combine <code>justify-content</code> and <code>align-items</code> properties to position your items !</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: center; align-items: center;">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["justify-content", "center"],
      ["align-items", "center"]
    ]
  },
  {
    name: "Flex positionning 2/2",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `justify-content: <value>;
align-items: <value>;`,
    help: `<p>Combine <code>justify-content</code> and <code>align-items</code> properties to position your items !</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi>
      <sushi></sushi>
      <sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: space-between; align-items: flex-end;">
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["justify-content", "space-between"],
      ["align-items", "flex-end"]
    ]
  },
  {
    name: "Flex direction 1/5",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `flex-direction: <value>;`,
    help: `<p><code>flex-direction</code> let you change the main axis of the flex layout, and its direction (left to right by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>row</code> : same direction than text in the user language</li>
    <li><code>row-reverse</code> : opposite direction than text in the user language</li>
    <li><code>column</code> : perpendicular to text direction, following the reading direction</li>
    <li><code>column-reverse</code> : perpendicular to text direction, opposite to the reading direction</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-direction: row-reverse">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["flex-direction","row-reverse"]
    ]
  },
  {
    name: "Flex direction 2/5",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `flex-direction: <value>;`,
    help: `<p><code>flex-direction</code> let you change the main axis of the flex layout, and its direction (left to right by default in English language)</p>
    <p>It can take the following values:
    <ul>
    <li><code>row</code> : same direction than text in the user language</li>
    <li><code>row-reverse</code> : opposite direction than text in the user language</li>
    <li><code>column</code> : perpendicular to text direction, following the reading direction</li>
    <li><code>column-reverse</code> : perpendicular to text direction, opposite to the reading direction</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-direction: column">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["flex-direction","column"]
    ]
  },
  {
    name: "Flex direction 3/5",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    tableStyles: `width: 720px; height: 360px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `flex-direction
justify-content`,
    help: `<p>Combine what you learned with <code>flex-direction</code> and <code>justify-content</code> to position the items !</p>`,
    inputLinesNumber: 2,
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-direction: row-reverse; justify-content: flex-end;">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["flex-direction","row-reverse"],
      ["justify-content","flex-end"],
    ]
  },
  {
    name: "Flex direction 4/5",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    tableStyles: `width: 720px; height: 400px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `flex-direction
justify-content
align-items`,
    help: `<p>Combine what you learned with <code>flex-direction</code>, <code>justify-content</code> and <code>align-items</code> to position the items !</p>`,
    inputLinesNumber: 3,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-direction: column-reverse; justify-content: space-between; align-items: center;">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["flex-direction","column-reverse"],
      ["justify-content","space-between"],
      ["align-items","center"],
    ]
  },
  {
    name: "Flex direction 5/5",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    tableStyles: `width: 720px; height: 400px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `flex-direction
justify-content
align-items`,
    help: `<p>Combine what you learned with <code>flex-direction</code>, <code>justify-content</code> and <code>align-items</code> to position the items !</p>`,
    inputLinesNumber: 3,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-direction: row-reverse; justify-content: center; align-items: flex-end;">
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["flex-direction","row-reverse"],
      ["justify-content","center"],
      ["align-items","flex-end"],
    ]
  },
  {
    name: "Flex order 1/4",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "sushi.egg",
    tableStyles: `width: 720px; height: 400px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `order: <number>`,
    help: `<p>You can change the order of distribution of items in a flex layout by specifying the <code>order</code> property on a direct child element.</p>
    <p>Value must be an <b> integer number</b>, positive or negative. Items will then be distributed in ascending order.</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper">
      <plate class="salmon"></plate>
      <plate class="egg" style="order:3"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["order", val => Number(val) > 0],
    ]
  },
  {
    name: "Flex order 2/4",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "sushi.salmon",
    tableStyles: `width: 720px; height: 400px`,
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `order: <number>`,
    help: `<p>You can change the order of distribution of items in a flex layout by specifying the <code>order</code> property on a direct child element.</p>
    <p>Value must be an <b> integer number</b>, positive or negative. Items will then be distributed in ascending order.</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper">
      <plate class="salmon"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["order", val => Number(val) < 0],
    ]
  }
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

      const editorInput = document.querySelector(".editor textarea");
      if(editorInput instanceof HTMLTextAreaElement) editorInput.value = "";

      const table = document.querySelector('.table-board');
      if(!table) return;
      table.setAttribute("style", level.tableStyles ?? "")

      const selectors = new Set([level.selector, ...Object.keys(level.cssRules)])
      for(let selector of selectors){
        table.querySelectorAll(selector).forEach(el => {
          el.setAttribute("data-existing-style", el.getAttribute("style") ?? "")
          el.setAttribute("style", [el.getAttribute("style"), ...(level.cssRules[selector] ?? [])].join(";"))
        })
      }
    })
  }
}


