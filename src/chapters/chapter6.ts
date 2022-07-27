import {state} from "../game";
import { Level } from "./level";

import LayoutGame from "../components/LayoutGame.vue";
import SyntaxLevelInstructions from "../components/SyntaxLevelInstructions.vue";
import { Chapter } from "./chapter";
import {nextTick} from "vue";
import { addBoardElementsTooltips } from "../tooltip";

export interface Chapter6Level extends Level {
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

/*
make a bento:

display: grid
grid-template-columns
grid-template-rows
grid-template
grid-template + repeat()
grid-gap
grid-row-gap
grid-column-gap
grid-column-start
grid-column-end
grid-row-start
grid-row-end
grid-column
grid-column + grid-row
grid-column + grid-row + span keyword
grid-area
order
named rows/columns
named areas + grid-template-areas + grid-column/grid-row
named areas + grid-template-areas + grid-area
implicitly named areas + grid-area
implicitly named rows/columns + grid-column/grid-row
implicit grid (or Auto grids) + grid-auto-rows
grid-auto-flow: column
grid-auto-flow + grid-auto-columns

grid items alignment: justify-items
justify-items + align-items
justify-self
align-self

grid alignment: justify-content
justify-content + align-content

final challenge: explicit grid with named areas
final challenge: implicit grid with auto flow and repeat()

*/

export const chapter6Levels: Chapter6Level[] = [
  {
    name: "Grid display",    
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {},
    syntax: `display: grid;`,
    help: `<p>Grid layout lets you control the sizing and positioning of its <b>direct child elements</b>, that we will refer to as <b>items</b>. By default, grid elements have this behavior:
    <ul>
    <li>Items are placed in rows by default</li>
    <li>Rows evenly distribute the height of the container</li>
    <li>Items span the full width of the grid container</li>
    </ul></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-rows: repeat(3, 1fr)">
      <div title="rice"></div>
      <div title="broccoli"></div>
      <div title="fruits"></div>
    </div>`,
    check: [
      ["display","grid"]
    ]
  },

  {
    name: "Grid: Fixed template columns",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid"]
    },
    syntax: `grid-template-columns:
  <dim1> <dim2> <dim3...>;`,
    help: `<p>Grid is capable of handling fixed layouts (explicit) and automatic layouts (implicit). First we are going to focus on fixed templates, where items fill a predefined layout.</p>
    <p>The <code>grid-template-columns</code> let you specify the number and the size of columns in your grid layout. It takes a value the list of dimensions of each column from left to right, separated with white spaces.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile broccoli"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-columns: 20% 60% 20%">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (20% width)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (60% width)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (20% width)"></div>
    </div>`,
    examples: [
      `<code>grid-template-columns: 300px 300px;</code> defines a 2-column layout with each column being 300px wide`
    ],
    check: [
      ["grid-template-columns","20% 60% 20%"]
    ]
  },

  {
    name: "Grid: Fixed template rows",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid"]
    },
    syntax: `grid-template-rows:
  <dim1> <dim2> <dim3...>;`,
    help: `<p>The <code>grid-template-rows</code> let you specify the number and the size of <b>rows</b> in your grid layout. It takes a value the list of dimensions of each column from top to bottom, separated with white spaces.</p>
    <p>The <code>fr</code> unit (free remaining) is a dimension used to specify a <b>fraction of the remaining space</b>.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-rows: 80px 2fr 1fr">
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (80px height)"></div>
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (2/3 of remaining space)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (1/3 of remaining space)"></div>
    </div>`,
    examples: [
      `<code>grid-template-rows: 2fr 1fr 1fr</code> defines a 3-rows layout with the first row being twice as wide as the other rows`
    ],
    check: [
      ["grid-template-rows","80px 2fr 1fr"]
    ]
  },

  {
    name: "Grid: Fixed template cols + rows",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid"]
    },
    syntax: `grid-template-rows
grid-template-columns`,
    help: `<p>By combining <code>grid-template-rows</code> and <code>grid-template-columns</code>, you can start describing a 2-dimensions layout.</p>
    <p>The items will be spread from left to right, then from top to bottom ; following the same logic than the inline content flow for the current language.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-rows: 1fr 100px; grid-template-columns: 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (1/3 wide)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (100px high)"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["grid-template-rows", "1fr 100px"],
      ["grid-template-columns", "2fr 1fr"],
    ]
  },

  {
    name: "Grid template: grid shorthand",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid"]
    },
    syntax: `grid: <rows> / <columns>`,
    help: `<p>The <code>grid</code> property is a <b>shorthand</b> to specify both the columns and the rows in a single instruction. The rows and columns dimensions must be separated with a <code>/</code> character.</p>
    <p>Try to reproduce the same layout than the previous exercise with a single instruction.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile broccoli"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: 1fr 100px / 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="broccoli (1/3 wide)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (100px high)"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,
    inputLinesNumber: 1,
    check: [
      ["grid", "1fr 100px / 2fr 1fr"]
    ]
  },
 
];

export const chapter6: Chapter = {
  name: "CSS - Grid Layout",
  description: "Powerful 2D layouts",
  levels: chapter6Levels,
  leftPanelComponent: LayoutGame,
  rightPanelComponent: SyntaxLevelInstructions,
  credits: `Credits: `,
  intro: `<p>Let's learn the different ways to position elements in CSS !</p>
  <p>While flexbox is a great layout tool for <b>one-directional</b> flow, we still need a solution for complex 2D placement.</p>
  <p>CSS Grid is this solution. It consists of around 24 new CSS properties that provides a powerful way to create two-dimensional layouts. Let's dig in !</p>`,
  onLevelStart(){
    const level = state.level as Chapter6Level
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