import { CssEditorLevel } from "./level";
import { Chapter } from "./chapter";
import { nextTick } from "vue";
import { addBoardElementsTooltips } from "../tooltip";

export interface Chapter6Level extends CssEditorLevel {
  doThis: string;
  syntax?: string;
  help?: string;
  helpTitle?: string;
  examples?: string[];
  tableStyles?: string;
  hintMarkup?: string;
}

/*
make a bento:

grid-gap
grid-row-gap
grid-column-gap

order
named rows/columns
named areas + grid-template-areas + grid-column/grid-row
named areas + grid-template-areas + grid-area
implicitly named areas + grid-area
implicitly named rows/columns + grid-column/grid-row
implicit grid (or Auto grids) + grid-auto-rows
grid-auto-flow: column
grid-auto-flow + grid-auto-columns



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
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-rows: repeat(3, 1fr)">
      <div title="rice"></div>
      <div title="veggies"></div>
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
      <div class="tile veggies"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-columns: 20% 60% 20%">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (20% width)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (60% width)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (20% width)"></div>
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
      <div class="tile veggies"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-rows: 80px 2fr 1fr">
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (80px height)"></div>
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice (2/3 of remaining space)"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (1/3 of remaining space)"></div>
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
      <div class="tile veggies"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid-template-rows: 1fr 100px; grid-template-columns: 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (1/3 wide)"></div>
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
      <div class="tile veggies"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: 1fr 100px / 2fr 1fr;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies (1/3 wide)"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis (100px high)"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,
    inputLinesNumber: 1,
    check: [
      ["grid", "1fr 100px / 2fr 1fr", "auto 100px / 2fr 1fr"]
    ]
  },

  {
    name: "Grid gaps",
    doThis: "Add 50px gaps between the zones of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: 1fr 100px / 2fr 1fr;"]
    },
    syntax: `gap: <dimension>
gap: <row> <col>`,
    help: `<p>To add space between the items of the grid, use the <code>gap</code> property. You can pass two values if you want to specify different gaps between rows and columns.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="sushis">
        <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      </div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: 1fr 100px / 2fr 1fr; gap: 50px;">
      <div style="--section-color: rgba(255,255,255,0.5)" title="rice"></div>
      <div style="--section-color: rgba(0,255,0,0.5)" title="veggies"></div>
      <div style="--section-color: rgba(0,0,0,0.5)" title="sushis"></div>
      <div style="--section-color: rgba(255,255,0,0.5)" title="fruits"></div>
    </div>`,
    inputLinesNumber: 1,
    check: [
      ["gap", "50px", "50px 50px"]
    ]
  },

  {
    name: "Grid template: repeat()",
    doThis: "Use grid: repeat() to declare a 4x3 grid layout with equal size areas",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid"]
    },
    syntax: `repeat(<number>, <dim>)`,
    help: `<p>The <code>repeat()</code> keyword is a utility to repeat the same dimension a certain number of times in a grid template declaration.</p>
    <p style="font-weight: bold">Try to use this keyword with the <code>grid</code> property to fill the bento with a 4x3 grid layout with equal size areas.</p>`,
    examples: [
      `<code>grid-template-rows: repeat(5, 50px)</code> is equivalent to <code>grid-template-rows: 50px 50px 50px 50px 50px</code>`,
      `<code>grid: repeat(3, 100px) / repeat(2, 1fr)</code> is equivalent to <code>grid: 100px 100px 100px / 1fr 1fr</code>, which declares 3 rows of 100px height and 2 columns of equal size.`
    ],
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr);">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>`,
    inputLinesNumber: 1,
    check: [
      ["grid", "repeat(3, 1fr) / repeat(4, 1fr)", "repeat(3, auto) / repeat(4, auto)"]
    ]
  },

  {
    name: "Grid: items alignment",
    doThis: "Center the sushis in the areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(3, 1fr) / repeat(4, 1fr)"]
    },
    syntax: `justify-items: <value>
align-items: <value>`,
    help: `<p>After items are spread in the different areas of your grid layout, you can also change the way they are aligned in their area with the <code>justify-items</code> and <code>align-items</code> properties.</p>
    <p>These properties can take <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items">many different values</a>, notably:</p>
    <ul>
    <li><code>stretch</code>: stretch to fill the whole height/width of the area</li>
    <li><code>start</code>: pack near the starting edge of the area</li>
    <li><code>end</code>: pack near the end edge of the area</li>
    <li><code>center</code>: pack around the vertical/horizontal center of the area</li>
    <li><code>baseline</code>: align so that all the items share the same baseline</li>
    </ul>`,
    examples: [
      `<code>justify-items: end</code> will align the items content on the right edge of the area</code>`,
      `<code>align-items: stretch</code> will stretch the items content so they fill the entire height of their area</code>`
    ],
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr);">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>

    </div>`,
    inputLinesNumber: 2,
    check: [
      ["justify-items", "center"],
      ["align-items", "center"],
    ]
  },

  {
    name: "Grid: items alignment",
    doThis: "Stretch the tiles to fill their area of the bento",
    selector: ".tile",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: 150px 1fr / 1fr 1fr 1fr", "align-items: center", "justify-items: center"]
    },
    syntax: `justify-self: <value>
align-self: <value>`,
    help: `<p>You can also change the alignment of specific items by setting the <code>justify-self</code> and <code>align-self</code> properties of the item element.</p>
    <p>Values accepted are the same than for <code>justify-items</code> / <code>align-items</code>:</p>
    <ul>
    <li><code>stretch</code>: stretch to fill the whole height/width of the area</li>
    <li><code>start</code>: pack near the starting edge of the area</li>
    <li><code>end</code>: pack near the end edge of the area</li>
    <li><code>center</code>: pack around the vertical/horizontal center of the area</li>
    <li><code>baseline</code>: align so that all the items share the same baseline</li>
    </ul>`,    
    markup: `
    <bento style="width: 700px; height: 360px">
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: 150px 1fr / 1fr 1fr 1fr">
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["justify-self", "stretch"],
      ["align-self", "stretch"],
    ]
  },

  {
    name: "grid-column-start",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: ".rice",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(3, 1fr) / repeat(4, 1fr)"]
    },
    syntax: `grid-column-start: <num>`,
    help: `<p><code>grid-column-start</code> specifies the position of the starting edge of the item within the grid columns. If required, it can add a span or a new line.</p>
    <p>The first column starts at 1. If a negative integer is given, it counts in reverse, starting from the end edge.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2"></div>      
      <div title="veggies"></div>
      <div title="fruits"></div>
    </div>`,
    check: [
      ["grid-column-start", "2"]
    ]
  },

  {
    name: "grid-column-end",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: ".rice",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(3, 1fr) / repeat(4, 1fr)"],
      ".rice": ["grid-column-start: 2"]
    },
    syntax: `grid-column-end: <num>`,
    help: `<p><code>grid-column-end</code> specifies the position of the end edge of the item within the grid columns.</p>
    <p>The left edge of the first column has number 1, so the item will actually stop at column <code>num - 1</code>.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="veggies"></div>
      <div title="fruits"></div>
    </div>`,
    check: [
      ["grid-column-end", "4", "-2"],
    ]
  },

  {
    name: "grid-row-start",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: ".veggies",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(3, 1fr) / repeat(4, 1fr)"],
      ".rice": ["grid-column-start: 2", "grid-column-end: 4"]
    },
    syntax: `grid-row-start: <num>`,
    help: `<p><code>grid-row-start</code> specifies the position of the start edge of the item within the grid rows.</p>
    <p>Note how the fruits tile fills the remaining space available on first row.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="veggies" style="grid-row-start: 2"></div>
      <div title="fruits"></div>
    </div>`,
    check: [
      ["grid-row-start", "2"]
    ]
  },

  {
    name: "grid-row-end",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: ".veggies",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(3, 1fr) / repeat(4, 1fr)"],
      ".rice": ["grid-column-start: 2", "grid-column-end: 4"],
      ".veggies": ["grid-row-start: 2"]
    },
    syntax: `grid-row-end: <num>`,
    help: `<p><code>grid-row-end</code> specifies the position of the end edge of the item within the grid rows.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column-start: 2; grid-column-end: 4"></div>      
      <div title="veggies" style="grid-row-start: 2; grid-row-end: 4"></div>
      <div title="fruits"></div>
    </div>`,
    check: [
      ["grid-row-end", "4"]
    ]
  },

  {
    name: "grid-row & grid-column",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: ".rice",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(3, 1fr) / repeat(4, 1fr)"],
    },
    syntax: `grid-row: <start>/<end>
grid-column: <start>/<end>`,
    help: `<p><code>grid-row</code> and <code>grid-column</code> are shorthands to specify both the start and end positions within the grid rows and columns, separated with <code>/</code>.</p>
    <p>Items can be spread on multiple rows and columns at the same time. The following items will try to occupy the free spaces left behind.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column: 3/5; grid-row: 1/3;"></div>      
      <div title="veggies"></div>
      <div title="fruits"></div>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["grid-row", "1/3"],
      ["grid-column", "3/5", "3/-1"]
    ]
  },

  {
    name: "Dense Packing",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid"],
      ".rice": ["grid-column: 1 / 3"]
    },
    syntax: `grid-auto-flow: row dense`,    
    help: `<p>The default behavior of grid layout is to place items along the rows while always progressing forward. The items will be placed according to the order they are in the source, or any modification with the <code>order</code> property. If there is not enough space to fit an item, grid will leave a gap and move to the next track.</p>
    <p>An auto-placed layout with some items spanning multiple tracks may result in a grid with some unfilled cells. You can change the automatic flow to make fill these gaps. This may mean that the display becomes disconnected from the logical order. This is called <b>dense packing</b>.</p>
    `,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile veggies"></div>
      <div class="tile rice"></div>
      <div class="tile fruits"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style='grid-auto-flow: row dense;'>      
      <div title="veggies"></div>  
      <div title="rice" style="grid-column: 1 / 3"></div>
      <div title="fruits"></div>
      <div title="fruits"></div>
    </div>`,
    check: [
      ["grid-auto-flow", 'dense', 'row dense'],
    ]
  },

  {
    name: "Grid Areas",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: ".veggies",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(3, 1fr) / repeat(4, 1fr)"],
      ".rice": ["grid-column: 3/5","grid-row: 1/3"]
    },
    syntax: `grid-area: <row-start>
         / <col-start>
         / <row-end>
         / <col-end>`,
    help: `<p><code>grid-area</code> is even shorter because it let you specify the start and end positions for both row and column in a single instruction.</p>
    <p>The values are passed in this order: y1/x1/y2/x2 ; separated with character <code>/</code></p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="grid: repeat(3, 1fr) / repeat(4, 1fr)">
      <div title="rice" style="grid-column: 3/5; grid-row: 1/3;"></div>      
      <div title="veggies" style="grid-area: 3/2/4/4;"></div>
      <div title="fruits"></div>
    </div>`,
    check: [
      ["grid-area", " 3/2/4/4"]
    ]
  },

  {
    name: "Grid: Named Areas",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid: repeat(2, 1fr) / repeat(3, 1fr)"],
      ".sushis" : ["grid-area: sushis"],
      ".rice" : ["grid-area: rice"],
      ".veggies" : ["grid-area: veggies"],
      ".fruits" : ["grid-area: fruits"],
    },
    syntax: `grid-template-areas:   
  <string>+`,
    examples: [
      `<pre><code>grid-template-areas:
    "header header"
    "menu   main"
    "menu   footer"</code></pre>
    <img src="img/grid-template-areas-example.png"/>
    `],
    help: `<p><code>grid-template-areas</code> let you define custom names for areas in your grid with a handy syntax.</p>
    <p>Items can then be assigned to these areas by their name using the <code>grid-area</code> property.</p>
    <p>Each string contains the area names for each column, separated by spaces. These string parts are then listed for each row, separated by spaces as well. Line breaks are not mandatory but can help to visualize the layout.</p>
    <p>Names can be repeated to spread areas on several rows/columns.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="sushis">
        <sushi></sushi>
        <sushi></sushi>
        <sushi></sushi>
        <sushi></sushi>
      </div>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style='grid: repeat(2, 1fr) / repeat(3, 1fr); grid-template-areas: "sushis sushis fruits" "rice veggies fruits"'>
      <div title="sushis" style="grid-area: sushis"></div>      
      <div title="rice" style="grid-area: rice"></div>
      <div title="veggies" style="grid-area: veggies"></div>
      <div title="fruits" style="grid-area: fruits"></div>
    </div>`,
    check: [
      ["grid-template-areas", '"sushis sushis fruits" "rice veggies fruits"'],
    ]
  },

  {
    name: "Implicit Grid",
    doThis: "Distribute the food in the correct areas of the bento",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid", "grid-auto-flow: column", "grid-template-rows: 100%"]
    },
    syntax: `grid-auto-rows: <dims>...
grid-auto-columns: <dims>...`,
    examples: [
      `<code>grid-auto-rows: minmax(100px, auto);</code> will automatically create rows at a minimum size of 100px.`,
      `<code>grid-auto-columns: 100px 200px</code> will automatically create columns alternating between 100px and 200px.`
    ],
    help: `<p>When you are not explicitely declaring a grid with <code>grid-template</code> properties, or when the explicit grid is full, the items are placed in new tracks, automatically created. These tracks are referred to as the <strong>implicit grid</strong>.</p>
    <p>You can change the sizing of these implicit new tracks with the <code>grid-auto-rows</code> and <code>grid-auto-columns</code> property.</p>`,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile rice"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style='grid-auto-flow: column; grid-template-rows: 100%; grid-auto-columns: 100px 1fr'>
      <div title="rice (100px wide)"></div>
      <div title="veggies"></div>
      <div title="rice (100px wide)"></div>
      <div title="veggies"></div>
      <div title="rice (100px wide)"></div>
    </div>`,
    check: [
      ["grid-auto-columns", '100px 1fr', '100px auto', '100px 1fr 100px 1fr 100px'],
    ]
  },

  {
    name: "Implicit Grid - auto-fit / auto-fill",
    doThis: "Fill the whole bento, each area being at least 200px wide.",
    selector: "bento",
    wrapperClass: "grid-game",
    cssRules: {
      "bento": ["display: grid"]
    },
    syntax: `repeat(
  auto-fit,
  minmax(100px, 1fr)
)`,
    examples: [
      `<code>grid-template-columns: repeat(auto-fit, minmax(50px, 100px))</code> will make as many columns as needed between 50px and 100px wide, to fill the entire grid container.`],
    help: `<p>Use the <code>auto-fit</code> keyword in a <code>repeat()</code> instruction to automatically pick the right number of columns or rows that can fit the grid depending on your content.</p>
    <p>This is especially useful for automatic responsive sizing of your grid, when combining it with variable sizing like <code>minmax(200px, 1fr)</code>.</p>
    <p><code>auto-fill</code> is a small variation of <code>auto-fit</code> that allows to create empty columns to fill the first row if needed. There is no difference between them once the first track is filled.</p>
    <p style="font-weight: bold">Find the right declaration for <code>grid-template-columns</code> to fill the whole bento, but each area not more than 200px wide.</p>
    `,
    markup: `
    <bento style="width: 700px; height: 360px">      
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>      
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
      <div class="tile rice"></div>
      <div class="tile rice"></div>
      <div class="tile veggies"></div>
      <div class="tile fruits"></div>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style='grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))'>      
      <div title="rice (>=200px)"></div>
      <div title="veggies (>=200px)"></div>
      <div title="fruits (>=200px)"></div>      
      <div title="veggies (>=200px)"></div>
      <div title="fruits (>=200px)"></div>
      <div title="rice (>=200px)"></div>
      <div title="rice (>=200px)"></div>
      <div title="veggies (>=200px)"></div>
      <div title="fruits (>=200px)"></div>
    </div>`,
    check: [
      ["grid-template-columns", 'repeat(auto-fit, minmax(200px, 1fr))', 'repeat(auto-fit, minmax(200px, auto))'],
    ]
  }

  /*todo:
  span keyword ?
  implicit grid-area names with grid-column + grid-row ?
*/
 
];

export const chapter6: Chapter = {
  name: "Grid Layout",
  description: "Powerful 2D layouts",
  levels: chapter6Levels,
  credits: `Credits: inspired from <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> by <a href="https://codepip.com" target="_blank">Codepip</a>`,
  intro: `<p>Let's learn the different ways to position elements in CSS !</p>
  <p>While flexbox is a great layout tool for <b>one-directional</b> flow, we still need a solution for complex 2D placement.</p>
  <p>CSS Grid is this solution. It consists of around 24 new CSS properties that provides a powerful way to create two-dimensional layouts. Let's dig in !</p>`,
  onLevelStart(){
    nextTick(() => {
      addBoardElementsTooltips()
    })
  }
}