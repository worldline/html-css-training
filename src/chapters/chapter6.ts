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
display: inline-grid
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
      <div>rice</div>
      <div>broccoli</div>
      <div>fruits</div>
    </div>`,
    check: [
      ["display","grid"]
    ]
  },
  {
    name: "Inline Grid",    
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {},
    syntax: `display: inline-grid;`,
    help: `<p><code>inline-grid</code>:
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
      <div>rice</div>
      <div>broccoli</div>
      <div>fruits</div>
    </div>`,
    check: [
      ["display","grid"]
    ]
  }
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