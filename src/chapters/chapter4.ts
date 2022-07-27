import {state} from "../game";
import { Level } from "./level";

import LayoutGame from "../components/LayoutGame.vue";
import Chapter2LevelInstructions from "../components/SyntaxLevelInstructions.vue";
import { Chapter } from "./chapter";
import {nextTick} from "vue";
import { addBoardElementsTooltips } from "../tooltip";

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
    name: "Inline display",
    doThis: "Set the display mode of apples to inline",
    selector: "apple",
    tableStyles: `width: 800px; min-height: 360px`,
    cssRules: {
      "apple": ["display: block"]
    },
    wrapperClass: "inline-layout",
    syntax: "display: inline",
    help: `<p>The <code>display</code> property does two things. The first thing it does is determine if the box it is applied to acts as <b>inline</b> or <b>block</b>. The second is to determine how the element's children should behave.</p>
    <p>Inline elements behave like words in a sentence. They sit next to each other in the inline direction (horizontal in plain English). Elements such as <tag>span</tag> or <tag>a</tag>, which typically contain text, are inline by default. They also preserve surrounding whitespace.</p>
    <p>Another property of inline elements if that you can't fix their dimensions with properties like <code>width</code> or <code>height</code>. Their size will be adjusted to fit the text and inline content they contain.</p>`,
    markup: `
    <p style="border: 2px solid red">
    This is a line of text including elements that we want to become inline. Here is an apple containing the letter "A":
    <apple>A</apple>
     ; here is another apple, but smaller, with the letter "B":
    <apple class="small">B</apple>.
    When changing display mode to inline, you shall notice that the elements vertically align so that their text content is aligned with the parent text line.
    Also, their size will match the size of their text content, directly related to the current font size.</p>
    `,
    check: [
      ["display","inline"]
    ]
  },

  {
    name: "Inline: text-align",
    doThis: "Align the content on the right",
    selector: "p",
    tableStyles: `width: 800px; min-height: 360px`,
    cssRules: { "apple": ["display: inline"] },
    syntax: "text-align: <dir>",
    wrapperClass: "inline-layout",
    help: `<p><code>text-align</code> change the inline text alignment for all the inline child elements or text content.</p>
    <p>It does not apply to block elements or other non-inline display modes.</p>
    <p>Accepted values are:</p>
    <ul>
    <li><b>left</b> (or <b>start</b>)</li>
    <li><b>right</b> (or <b>end</b>)</li>
    <li><b>center</b></li>
    <li><b>justify</b></li>
    <li><b>justify-all</b> (also justify the last line)</li>
    </ul>`,
    markup: `
    <p style="border: 2px solid red">
    This is a line of text including elements that we want to become inline. Here is an apple containing the letter "A":
    <apple>A</apple>
     ; here is another apple, but smaller, with the letter "B":
    <apple class="small">B</apple>.
    When changing display mode to inline, you shall notice that the elements vertically align so that their text content is aligned with the parent text line.
    Also, their size will match the size of their text content, directly related to the current font size.</p>
    `,
    check: [
      ["text-align","right"]
    ]
  },

  {
    name: "Block display",
    doThis: "Display the bentos vertically",
    selector: "bento",
    tableStyles: `width: 800px; min-height: 360px`,
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
    tableStyles: `width: 800px; min-height: 360px`,
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
    tableStyles: `width: 800px; min-height: 360px`,
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
    doThis: "Set the top border width of bentos to 10px",
    selector: "bento",
    syntax: `border-width: <dimension>
border-<dir>-width: <dim>`,
    tableStyles: `width: 800px; min-height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px"]
    },
    examples: [
      `<code>border: 1px solid black</code> adds a 1 pixel width black solid border`,
      `<code>border-width: 20px</code> sets the border width to 20px while preserving existing border styles`,
      `<code>border-right-width: 1em</code> sets the right border width to 1em</code>`
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
      ["border-top-width","10px"]
    ]
  },  
  {
    name: "Width and height",
    helpTitle: "Dimensioning a block element",
    doThis: "Make all the bentos 200px wide",
    selector: "bento",    
    tableStyles: `width: 800px; min-height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px", "border-top-width: 10px"]
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
      ["width","200px"]
    ]
  },
  {
    name: "Auto margins",    
    doThis: "Set all margins to auto",
    selector: "bento",    
    tableStyles: `width: 800px; min-height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px", "border-top-width: 10px", "width: 200px"]
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
    tableStyles: `width: 800px; min-height: 360px`,
    cssRules: {
      "bento": ["display: block", "margin-bottom: 20px", "padding: 10px", "border-top-width: 10px", "width: 200px"]
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
    tableStyles: `width: 800px; min-height: 360px`,
    wrapperClass: "va-initial",
    cssRules: {
      "bento": ["display: block", "padding: 10px", "border-top-width: 10px", "width: 200px", "margin: 20px auto"]
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
    name: "Inline block horizontal align",    
    doThis: "Change the text alignment of the table to the right",
    selector: ".table",
    tableStyles: `width: 800px; min-height: 360px`,
    wrapperClass: "va-initial",
    cssRules: {
      "bento": ["display: inline-block", "padding: 10px", "border-top-width: 10px", "width: 200px", "margin: 20px auto"]
    },
    syntax: `text-align: <value>`,
    help: `<p>Inline-block elements are affected by <code>text-align</code> as well.</p>
    <p>Note that text-align is an <b>inherited</b> property, and so affects the child elements as well.</p>`,
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
      ["text-align","right"]
    ]
  },


  {
    name: "Inline block: baseline",
    doThis: "Align the bentos on the top edge",
    selector: "plate",
    wrapperClass: "va-initial",
    tableStyles: `width: 600px; min-height: 360px`,
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
    <bento style="height: 280px;">
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
    tableStyles: `width: 600px; min-height: 360px`,
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
    <bento style="height: 280px;">
      <plate></plate>
      <plate></plate>
    </bento>
    <bento style="height: 200px;"><plate></plate></bento>
    `,
    check: [
      ["vertical-align","middle"]
    ]
  }
];

export const chapter4: Chapter = {
  name: "CSS - Inline & Block Layout",
  description: "Basic display modes of HTML content",
  levels: chapter4Levels,
  leftPanelComponent: LayoutGame,
  rightPanelComponent: Chapter2LevelInstructions,  
  intro: `<p>Let's learn the different ways to position elements in CSS !</p>`,
  onLevelStart(){
    const level = state.level as Chapter4Level
    nextTick(() => {
      addBoardElementsTooltips()

      const editorInput = document.querySelector(".editor textarea");
      if(editorInput instanceof HTMLTextAreaElement){
        editorInput.value = "";
        editorInput.focus()
      }

      const table = document.querySelector('.table-content');
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