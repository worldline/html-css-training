import { CssEditorLevel, resetEditor } from "./level";
import LayoutGame from "../components/LayoutGame.vue";
import SyntaxLevelInstructions from "../components/SyntaxLevelInstructions.vue";
import { Chapter } from "./chapter";
import {nextTick} from "vue";
import { addBoardElementsTooltips } from "../tooltip";
import { applyStyles } from "../css-editor";

export interface Chapter5Level extends CssEditorLevel {
  doThis: string;
  syntax?: string;
  help?: string;
  helpTitle?: string;
  examples?: string[];  
  check: [string, string | ((val: string) => boolean)][];
  hintMarkup?: string;
}

export const chapter5Levels: Chapter5Level[] = [
  {
    name: "Flex display",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    wrapperClass: "flex-game",
    cssRules: {},
    syntax: `display: flex;`,
    help: `<p>Flex layout lets you control the sizing and positioning of its direct child elements, that we will refer to as <b>items</b>. By default, flex layout has this behavior:
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
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
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
      ["justify-content", val => val === "flex-end" || val === "right" || val === "end"]
    ]
  },
  {
    name: "Flex: justify-content 2/4",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
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
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
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
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
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
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
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
    name: "Flex: align-items 1/3",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
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
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
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
    name: "Flex align-items 2/3",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
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
    name: "Flex: align items 3/3",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
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
    name: "Flex order 1/2",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "sushi.egg",
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
    name: "Flex order 2/2",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "sushi.salmon",
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
  },
  {
    name: "Flex: self alignment",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "sushi.egg",
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex", "justify-content: space-between"]
    },
    syntax: `align-self: <value>`,
help: `<p>You can change the alignment on cross axis for specific child elements too, by using the <code>align-self</code> property on the child element. It receive the same values than <code>align-items</code>.</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: space-between">
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="egg" style="align-self: flex-end"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
    </div>`,
    check: [
      ["align-self", "flex-end"],
    ]
  },
  {
    name: "Flex: self align and order",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "sushi.salmon",
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex", "justify-content: space-around"]
    },
    syntax: `align-self: <value>;
order: <number>;`,
    help: `<p>You can change the alignment on cross axis for specific child elements too, by using the <code>align-self</code> property on the child element. It receive the same values than <code>align-items</code>.</p>
    <p>Combine <code>order</code> and <code>align-self</code> properties to correctly place the items on their plate.</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="justify-content: space-around">
      <plate class="salmon" style="align-self: center; order: 2"></plate>
      <plate class="avocado"></plate>
      <plate class="salmon" style="align-self: center; order: 2"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["align-self", "center"],
      ["order", val => Number(val) > 0]
    ]
  },
  {
    name: "Flex: wrapping",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `flex-wrap: <value>`,
    help: `<p>By default, items will try to fit on one line in a flex layout. If there is not enough space, items will be compressed.</p>
    <p>You can change this behavior to wrap on a new line with the <code>flex-wrap</code> property that takes following values:</p>
    <ul>
    <li><code>nowrap</code>: all elements fit on a single line</li>
    <li><code>wrap</code>: items wrap across multiple lines as needed</li>
    <li><code>wrap-reverse</code>: items wrap accross multiple lines in reverse order</li>
    </ul>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-wrap: wrap">
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    check: [
      ["flex-wrap", "wrap"]
    ]
  },
  {
    name: "Flex: wrapping and direction",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `flex-wrap: <value>;
flex-direction: <dir>;`,
    help: `<p>Line wrapping al works with other <code>flex-direction</code> as well.</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="egg"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-wrap: wrap; flex-direction: column">
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="avocado"></plate>
      <plate class="salmon"></plate>
      <plate class="salmon"></plate>
      <plate class="salmon"></plate>
      <plate class="salmon"></plate>
      <plate class="egg"></plate>
      <plate class="egg"></plate>
      <plate class="egg"></plate>
      <plate class="egg"></plate>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["flex-wrap", "wrap"],
      ["flex-direction", "column"]
    ]
  },
  {
    name: "Flex: align-content 1/2",    
    doThis: "Put the sushis on the plates",
    selector: "bento",
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `align-content: <value>`,
    help: `<p>When items are wrapped on multiple lines, the alignment of the lignes relatively to the flex container can be controlled with the <code>align-content</code> property. It takes the following values:</p>
    <ul>
    <li><code>flex-start</code> : lines are stacked at the start of the cross axis.</li>
    <li><code>flex-end</code>: lines are stacked at the end of the cross axis.</li>
    <li><code>center</code> : lines are centered in the container.
    <li><code>space-between</code> : lines are displayed with equal space between them.
    <li><code>space-around</code> : items are displayed with equal margins around them.</li>
    <li><code>space-evenly</code> : items are displayed with equal space between and around them.</li>
    <li><code>stretch</code> : lines are stretched to fit the container.</li>
    </ul>
    <p>By default, lines are stretched, so two lines will occupy half of the height of the container each.</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
      <sushi></sushi><sushi></sushi><sushi></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-wrap: wrap; align-content: flex-start;">
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
      <plate></plate><plate></plate><plate></plate>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["flex-wrap", "wrap"],
      ["align-content", "flex-start"]
    ]
  },
  {
    name: "Flex: align-content 2/2",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex", "flex-wrap: wrap"]
    },
    syntax: `align-content: <value>
flex-direction: <dir>`,
    help: `<p>When items are wrapped on multiple lines, the alignment of the lignes relatively to the flex container can be controlled with the <code>align-content</code> property. It takes the following values:</p>
    <ul>
    <li><code>flex-start</code> : lines are stacked at the start of the cross axis.</li>
    <li><code>flex-end</code>: lines are stacked at the end of the cross axis.</li>
    <li><code>center</code> : lines are centered in the container.
    <li><code>space-between</code> : lines are displayed with equal space between them.
    <li><code>space-around</code> : lines are displayed with equal space between and around them.
    <li><code>stretch</code> : lines are stretched to fit the container.</li>
    </ul>
    <p>By default, lines are stretched, so two lines will occupy half of the height of the container each.</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-wrap: wrap; flex-direction: column-reverse; align-content: center">
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    </div>`,
    inputLinesNumber: 2,
    check: [
      ["flex-wrap", "wrap"],
      ["flex-direction", "column-reverse"]
    ]
  },
  {
    name: "Flex: Final challenge",    
    doThis: "Put the sushis on the plates according to their color",
    selector: "bento",
    wrapperClass: "flex-game",
    cssRules: {
      "bento": ["display: flex"]
    },
    syntax: `justify-content: <value>
align-items: <value>
flex-direction: <dir>
order: <number>
flex-wrap: <value>
align-content: <value>`,
    help: `<p>Combine all what you learned to place the items correctly !</p>`,
    markup: `
    <bento style="width: 700px; height: 400px">
      <sushi class="avocado"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="salmon"></sushi>
      <sushi class="avocado"></sushi>
      <sushi class="egg"></sushi>     
      <sushi class="egg"></sushi>
    </bento>
    `,
    hintMarkup: `<div class="hint-wrapper" style="flex-wrap: wrap; flex-direction: column; align-content: space-evenly; justify-content: center;">
    <plate class="avocado"></plate>
    <plate class="salmon"></plate>
    <plate class="salmon"></plate>
    <plate class="avocado"></plate>
    <plate class="egg"></plate>
    <plate class="egg"></plate>
    </div>`,
    inputLinesNumber: 4,
    check: [
      ["flex-wrap", "wrap"],
      ["flex-direction", "column"],
      ["justify-content", "center"],
      ["align-content", "space-evenly"]
    ]
  },
];

export const chapter5: Chapter = {
  name: "CSS - Flex Layout",
  description: "One-directional content flow",
  levels: chapter5Levels,
  leftPanelComponent: LayoutGame,
  rightPanelComponent: SyntaxLevelInstructions,
  credits: `Credits: <a href="https://github.com/thomaspark">Thomas Park</a> for its inspiring <a target="_blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a> game.`,
  intro: `<p>Let's learn the different ways to position elements in CSS !</p>
  <p><code>flex</code> is another display mode for elements that is more powerful than <b>block</b>. Flex is used to specify <b>how the children of an element should occupy the space </b> they have in that element.</p>
    <p>Flex layouts should be used when you want to distribute elements along one axis, be it horizontal or vertical.</p>`,
  onLevelStart(){
    nextTick(() => {
      addBoardElementsTooltips()
      resetEditor()
      applyStyles()
    })
  }
}