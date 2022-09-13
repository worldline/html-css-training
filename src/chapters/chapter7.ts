import { CssEditorLevel, resetEditor } from "./level";
import ReproduceGame from "../components/ReproduceGame.vue";
import SyntaxLevelInstructions from "../components/SyntaxLevelInstructions.vue";
import { Chapter } from "./chapter";
import {nextTick} from "vue";
import { applyStyles } from "../css-editor";

export interface Chapter7Level extends CssEditorLevel {
  doThis?: string;
  syntax?: string;
  help?: string;
  helpTitle?: string;
  examples?: string[];
  check: [string, string | ((val: string) => boolean)][];
  expectedScreenshot: string;
}

const markup = `
<h1>Chef Nakamura's Restaurant</h1>
<main>
    <h2>Sushis</h2>
    <ul>
        <li>
            <span class="dish-name">Izumidai</span>
            <span class="dish-info">(tilapfish, seaweed)</span>
            <span class="price">$1.25</span>
        </li>
        <li>
            <span class="dish-name">Salmon</span>
            <span class="price">$1.25</span>
        </li>
        <li>
            <span class="dish-name">Unagi</span>
            <span class="dish-info">(eel, wasabi)</span>
            <span class="price">$1.50</span>
        </li>
        <li>
            <span class="dish-name">Shrimp</span>
            <span class="price">$1.25</span>
        </li>
    </ul>
    <p class="information">All our sushis are served with cooked rice and soy sauce served at will. 6 pieces minimum for deliveries and takeout orders. Allergens: fish, peanut</p>
</main>
`

export const chapter7Levels: Chapter7Level[] = [
  {
    name: "Font Families",
    selector: "h1",
    cssImports: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRules: {},
    syntax: `font-family: "MyFontName"`,
    help: `<p>Use the <code>font-family</code> property to change the typeface of the text in an element.</p>
    <p>This property accepts a comma-separated list of font names as quoted strings. You can also use generic font names like <code>serif</code>, <code>sans-serif</code> or <code>monospace</code> to display generic fonts specific to the user operating system.</p>
    <p>When passing several values, the first font that can be resolved by the browser will be used. Therefore, it's a good idea to put a generic font keyword after the specific font you want to use.</p>`,
    examples: [
      `<code>font-family: "Roboto", sans-serif;</code> will try to display Roboto font, or will fallback to the default sans-serif font of user's operating system`
    ],
    markup,
    doThis: `Set h1 font to "Reggae One", or serif by default`,
    expectedScreenshot: "img/reproduce/7-1.jpg",
    check: [
      ["font-family", `"Reggae One", serif`]
    ]
  },

  {
    name: "Text Color",
    selector: "p.information",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { "h1": ["font-family: 'Reggae One', serif"]},
    syntax: `color: <color>;"`,
    help: `<p>Text color is changed with the <code>color</code> property</p>`,
    markup,
    doThis: `Change information paragraph color to gray`,
    expectedScreenshot: "img/reproduce/7-2.jpg",
    check: [
      ["color", "gray"]
    ]
  },

  {
    name: "Italic / Oblique",
    selector: "p.information",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { "h1": ["font-family: 'Reggae One', serif"]},
    cssRules: { "p.information": ["color: gray"] },
    syntax: `font-style: normal;
font-style: italic;
font-style: oblique;`,
    help: `<p>Fonts can have 3 styles: <code>normal</code>, <code>italic</code> or <code>oblique</code></p>
    <p>For fonts that support it, <code>oblique</code> shows a slanted version of the regular typeface without turning it into a cursive version like <code>italic</code> does.</p>`,
    markup,
    doThis: `Put the information paragraph in italic`,
    expectedScreenshot: "img/reproduce/7-3.jpg",
    check: [
      ["font-style", `italic`]
    ]
  },

  {
    name: "Font Weight",
    selector: ".price",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "p.information": ["font-style: italic", "color: gray"]
    },
    cssRules: {},
    syntax: `font-weight: normal;
font-weight: bold;
font-weight: 100;`,
    help: `<p>If the font supports several weights, you can change it with <code>font-weight</code> property.</p>
    <p>Most fonts only supports a normal weight (400) and a bold weight (700). But you can try other values in the 100s like <code>100</code>, <code>200</code>, <code>300</code>... up to <code>900</code>.</p>
    <p><a href="https://web.dev/learn/css/typography/#variable-fonts" target="_blank" rel="external">Variable fonts</a> are a specific kind of dynamic font that can handle any value between 0 and 900.</p>`,
    markup,
    doThis: `Put the prices in bold`,
    expectedScreenshot: "img/reproduce/7-4.jpg",
    check: [
      ["font-weight", `bold`]
    ]
  },

  {
    name: "Font Size",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "p.information": ["font-style: italic", "color: gray"],
      ".price": ["font-weight: bold"]
    },
    cssRules: {},
    syntax: `font-size: <dim>;`,
    help: `<p>This property accepts all kinds of values: absolute dimensions like <code>24px</code>, relative dimensions like <code>120%</code> or <code>2.5em</code>, or keywords like <code>smaller</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>...</p>
    <p>The relative values are always relative to the parent element's <code>font-size</code>, as this property is inherited by children elements.</p>`,
    markup,
    doThis: `Set font size of h2 to 36px`,
    expectedScreenshot: "img/reproduce/7-5.jpg",
    check: [
      ["font-size", `36px`]
    ]
  },

  {
    name: "Text Casing",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px"],
      "p.information": ["font-style: italic", "color: gray"],
      ".price": ["font-weight: bold"]
    },
    cssRules: {},
    syntax: `text-transform: lowercase;
text-transform: uppercase;
text-transform: capitalize;`,
    help: `<p>Use the <code>text-transform</code> property to change the text casing of an element.</p>
    <p>Note that the casing in the HTML code will be the one that will be indexed by search engines, so use this property only if it is a visual change specific to this web page.</p>`,
    markup,
    doThis: `Put the h2 in uppercase`,
    expectedScreenshot: "img/reproduce/7-6.jpg",
    check: [
      ["text-transform", `uppercase`]
    ]
  },

  {
    name: "Font Variants",
    selector: ".dish-name",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase"],
      "p.information": ["font-style: italic", "color: gray"],
      ".price": ["font-weight: bold"]
    },
    cssRules: {},
    syntax: `font-variant: normal;`,
    help: `<p>Some fonts can be configured in several ways, for example to use alternate glyphs for capital letters, use traditional or simplified glyphs in East Asian languages, or display ligatures between some characters.</p>
    <p>These variants can be activated with the <code>font-variant</code> property, which takes a comma-separated list of variants to be used.</p>
    <p>You can find the complete list of variants on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant" target="_blank" rel="external">MDN</a>.</p>`,
    markup,
    doThis: `Use the small-caps variant for dish names`,
    expectedScreenshot: "img/reproduce/7-7.jpg",
    check: [
      ["font-variant", `small-caps`]
    ]
  },

  {
    name: "List styles",
    selector: "li",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase"],
      "p.information": ["font-style: italic", "color: gray"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold"]
    },
    cssRules: {},
    syntax: `list-style: none;
list-style: square;
list-style: "✔";
list-style: url('star.svg');`,
    help: `<p>Most browsers add small discs ● in front of each list item (<code>&lt;li&gt;</code> elements). This character can be changed or removed with <code>list-style</code> property.</p>
    <p>You can even add custom images or define your own counters.</p>`,
    markup,
    doThis: `Use "upper-roman" style for the dishes list`,
    expectedScreenshot: "img/reproduce/7-8.jpg",
    check: [
      ["list-style", "upper-roman"]
    ]
  },

  {
    name: "Line Height",
    selector: "li",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase"],
      "p.information": ["font-style: italic", "color: gray"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold"],
    },
    cssRules: {
      "li": ["list-style: upper-roman"]
    },
    syntax: `line-height: <dim>;
line-height: 1.5;
line-height: 150%;
line-height: normal;`,
    help: `<p><code>line-height</code> controls the space between each line of text in an element. This does not apply to space between paragraphs.</p>`,
    markup,
    doThis: `Set line height between dishes to 200%`,
    expectedScreenshot: "img/reproduce/7-9.jpg",
    check: [
      ["line-height", val => val == "200%" || val == "2"]
    ]
  },

  {
    name: "Letter Spacing",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase"],
      "p.information": ["font-style: italic", "color: gray"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold"],
      "li": ["list-style: upper-roman", "line-height: 200%"]
    },
    syntax: `letter-spacing: 150%;
letter-spacing: -2px;
letter-spacing: normal;`,
    help: `<p>Add or reduce space between letters with <code>letter-spacing</code>.</p>
    <p>This property controls the space between each line of text in an element. This does not apply to space between paragraphs.</p>`,
    markup,
    doThis: `Set letter-spacing for h2 to 1em`,
    expectedScreenshot: "img/reproduce/7-10.jpg",
    check: [
      ["letter-spacing", "1em"]
    ]
  },

  {
    name: "Word Spacing",
    selector: ".dish-info",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase", "letter-spacing: 1em"],
      "p.information": ["font-style: italic", "color: gray"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold"],
      "li": ["list-style: upper-roman", "line-height: 200%"]
    },
    syntax: `word-spacing: <dim>;
word-spacing: normal;`,
    help: `<p>Add or reduce space between words with <code>word-spacing</code>.</p>`,
    markup,
    doThis: `Set word-spacing for dish details to 5 pixels`,
    expectedScreenshot: "img/reproduce/7-11.jpg",
    check: [
      ["word-spacing", "5px"]
    ]
  },

  {
    name: "Underlines and overlines",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase", "letter-spacing: 1em"],
      "p.information": ["font-style: italic", "color: gray"],
      ".dish-info": ["word-spacing: 5px"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold"],
      "li": ["list-style: upper-roman", "line-height: 200%"]
    },
    syntax: `text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;`,
    help: `<p>Use <code>text-decoration</code> to add lines to your text.</p>
    <p>Underlines with <code>underline</code> keyword are most commonly used, but it’s possible to add lines above your text with <code>overline</code> or right through it with <code>line-through</code>. You can also specify multiple keywords for multiple lines.</p>`,
    markup,
    doThis: `Add an underline to SUSHIS`,
    expectedScreenshot: "img/reproduce/7-12.jpg",
    check: [
      ["text-decoration", "underline"]
    ]
  },

  {
    name: "Text Alignment",
    selector: "p.information",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase", "letter-spacing: 1em","text-decoration: underline"],
      "p.information": ["font-style: italic", "color: gray"],
      ".dish-info": ["word-spacing: 5px"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold"],
      "li": ["list-style: upper-roman", "line-height: 200%"]
    },
    cssRules: {},
    syntax: `text-align: left;
text-align: right;
text-align: justify;`,
    help: `<p>Change the text alignment within a paragraph with the <code>text-align</code> property.</p>
    <p>Values accepted: <code>left</code> (or <code>start</code>), <code>right</code> (or <code>end</code>), <code>justify</code></p>`,
    markup,
    doThis: `Align text of information paragraph to the right`,
    expectedScreenshot: "img/reproduce/7-13.jpg",
    check: [
      ["text-align", "right"]
    ]
  },

  {
    name: "Floating elements",
    selector: ".price",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase", "letter-spacing: 1em", "text-decoration: underline"],
      "p.information": ["font-style: italic", "color: gray", "text-align: right"],
      ".dish-info": [ "word-spacing: 5px"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold"],
      "li": ["list-style: upper-roman", "line-height: 200%"]
    },
    syntax: `float: <dir>;`,
    help: `<p>Use <code>float</code> property to make an element floating to a specific direction: <code>left</code> or <code>right</code></p>
    <p>Floating elements will no longer follow the classic inline layout. Instead, sibling elements will wrap around it. This is useful for displaying text that matches the outline of an image for example.</p>`,
    markup,
    doThis: `Align the prices with the right edge of the menu`,
    expectedScreenshot: "img/reproduce/7-14.jpg",
    check: [
      ["float", "right"]
    ]
  },

  {
    name: "Text Indentation",
    selector: "li",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase", "letter-spacing: 1em", "text-decoration: underline"],
      "p.information": ["font-style: italic", "color: gray", "text-align: right"],
      ".dish-info": ["word-spacing: 5px"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold", "float: right"],
      "li": ["list-style: upper-roman", "line-height: 200%"]
    },
    syntax: `text-indent: <dim>;`,
    help: `<p>Use <code>text-indent</code> to add an indent to your blocks of text. This property takes either a length (for example, 10px, 2em) or a percentage of the containing block’s width.</p>`,
    markup,
    doThis: `Add a 20px indent and a 50px left margin for each item`,
    expectedScreenshot: "img/reproduce/7-15.jpg",
    inputLinesNumber: 2,
    check: [
      ["text-indent", "20px"],
      ["margin-left", "50px"]
    ]
  },

  {
    name: "Text Direction",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase", "letter-spacing: 1em", "text-decoration: underline"],
      "p.information": ["font-style: italic", "color: gray", "text-align: right"],
      ".dish-info": [ "word-spacing: 5px"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold", "float: right"],
      "li": ["list-style: upper-roman", "line-height: 200%", "text-indent: 20px", "margin-left: 50px"]      
    },
    syntax: `writing-mode: <mode>;`,
    help: `<p>By default, in Western languages, text is read from left to right. Some languages like Arabic, Hebrew, or Persian are written right to left, and some like Japanese are written vertically.</p>
    <p>You can change the direction of text with <code>writing-mode</code> property. Values accepted are <code>ltr</code> (left to right), <code>rtl</code> (right to left), <code>vertical-lr</code> (top to bottom) and <code>vertical-rl</code> (bottom to top).</p>`,
    markup,
    doThis: `Display SUSHIS floating vertically on the left`,
    expectedScreenshot: "img/reproduce/7-16.jpg",
    inputLinesNumber: 2,
    check: [
      ["writing-mode", "vertical-lr"],      
      ["float", "left"]
    ]
  },

  {
    name: "Text Orientation",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["font-size: 36px", "text-transform: uppercase", "letter-spacing: 1em", "text-decoration: underline"],
      "p.information": ["font-style: italic", "color: gray", "text-align: right"],
      ".dish-info": ["word-spacing: 5px"],
      ".dish-name": ["font-variant: small-caps"],
      ".price": ["font-weight: bold", "float: right"],
      "li": ["list-style: upper-roman", "line-height: 200%", "text-indent: 20px", "margin-left: 50px"]
    },
    cssRules: {
      "h2": [ "float: left", "writing-mode: vertical-lr" ],
    },
    syntax: `text-orientation: <mode>;`,
    help: `<p>After changing the direction, you can also change the orientation of individual characters for styling purposes, with the <code>text-orientation</code> property. Values accepted are <code>mixed</code> (default), <code>upright</code> (rotate 90° characters of vertical text) or <code>sideways</code> (rotate 90° all characters)</p>`,
    markup,
    doThis: `Change the characters orientation and line decoration of SUSHIS`,
    expectedScreenshot: "img/reproduce/7-17.jpg",
    inputLinesNumber: 2,
    check: [
      ["text-orientation","upright"],
      ["text-decoration", "overline"]
    ]
  }

];

export const chapter7: Chapter = {
  name: "CSS - Typography",
  description: "The art of displaying text",
  levels: chapter7Levels,
  leftPanelComponent: ReproduceGame,
  rightPanelComponent: SyntaxLevelInstructions,  
  wrapperClass: "menu-wrapper",
  intro: `<p>Time to work on the restaurant menu !</p>
  <img src="img/menu-logo.png" height="120" style="display:block; height: 120px; margin: 0 auto" />
  <p>Everyone knows that best restaurants all have nice fonts on their menu. Let's see how we can make beautiful text displays with CSS !</p>`,
  onLevelStart(){
    nextTick(() => {
      resetEditor();
      applyStyles()
    })
  }
}