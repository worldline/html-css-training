import { CssEditorLevel, resetEditor } from "./level";
import { Chapter } from "./chapter";
import {nextTick} from "vue";
import { applyStyles } from "../css-editor";

export interface Chapter8Level extends CssEditorLevel {
  doThis?: string;
  syntax?: string;
  help?: string;
  helpTitle?: string;
  examples?: string[];
  check: [string, string | ((val: string) => boolean)][];
  expectedScreenshot: string;
}

const markup1 = `
<h1>Chef Nakamura's Restaurant</h1>
<main>
    <h2>Special Sushi Platters</h2>
    <ul>
        <li>
            <img src="img/sushis/1.png" width="200" />
            <span class="dish-name">Maki Mori</span>
            <span class="price">$23.90</span>
            <ul class="dish-content">
              <li>Miso Soup</li>
              <li>Cabbage Salad</li>
              <li>Sashimi, 20 pieces</li>
              <li>Cooked Rice</li>
            </ul>
        </li>
    </ul>    
</main>
`

export const chapter8Levels: Chapter8Level[] = [
  /*
  background-color
  linear-gradient
  radial-gradient
  background-image, repeat, position, size
  float images around text
  object-fit
  shape-outside
  picture filters
  background-clip: text (gros texte SUSHI avec une photo de sushi clipé sur le texte)
  mask-image

  */
  {
    name: "Background color",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"]
    },
    syntax: `background-color: <color>`,
    help: `<p>Use <code>background-color</code> to fill the element box (content + padding) with a color</p>
    <p>Colors in CSS can expressed with several notations:</p>
    <dl>
    <dt>Hexadecimal</dt><dd>#RGBA, with R, G, B, A be respectively red, green, blue and alpha values between 00 and FF, examples: #FF0000 for red, #CCC for gray</dd>
    <dt>RGBA</dt><dd>rgb(R,G,B,A) with R, G, B, A be respectively red, green, blue and alpha values between 0 and 255, examples: rgb(255,0,0) for red, rgba(128,128,128,0.5) for semi-opaque gray</dd>
    <dt>HSL</dt><dd>hsl(H,S,L,A) with H, S, L, A be respectively the hue between 0 and 360deg, and the saturation, luminosity and alpha between 0 and 100%</dd>
    </dl>
    `,
    examples: [
      `<code>background-color: #FF0000</code> for a red background`,
      `<code>background-color: #CCC</code> for a light gray background`,
      `<code>background-color: rgb(0,0,128,0.5)</code> for semi-opaque dark blue background`,
      `<code>background-color: hsl(180deg, 100%, 100%)</code> for a cyan background`
    ],
    markup: markup1,
    doThis: `Add a pure red background with 25% opacity for h2`,
    expectedScreenshot: "img/reproduce/7-1.jpg",
    check: [
      ["background-color", val => [
        `rgba(255,0,0,0.25)`,
        `rgba(255,0,0,25%)`,
        `rgb(255,0,0,0.25)`,
        `rgb(255,0,0,25%)`,
        `#ff000040`,
        `hsl(0,100%,100%,25%)`,
        `hsla(0,100%,100%,25%)`,
      ].includes(val)]
    ]
  },

  {
    name: "Background images",
    selector: "h1",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif"],
      "h2": ["background-color: #ff000040"]
    },
    cssRules: {
      "h1": ["color: white", "text-shadow: 0 0 0.5em black"]
    },
    syntax: `background-image: <url>`,
    help: `<p>Use <code>background-color</code> to fill the element box (content + padding) with a color</p>
    <p>Colors in CSS can expressed with several notations:</p>
    <dl>
    <dt>Hexadecimal</dt><dd>#RGBA, with R, G, B, A be respectively red, green, blue and alpha values between 00 and FF, examples: #FF0000 for red, #CCC for gray</dd>
    <dt>RGBA</dt><dd>rgb(R,G,B,A) with R, G, B, A be respectively red, green, blue and alpha values between 0 and 255, examples: rgb(255,0,0) for red, rgba(128,128,128,0.5) for semi-opaque gray</dd>
    <dt>HSL</dt><dd>hsl(H,S,L,A) with H, S, L, A be respectively the hue between 0 and 360deg, and the saturation, luminosity and alpha between 0 and 100%</dd>
    </dl>
    `,
    examples: [
      `<code>background-color: #FF0000</code> for a red background`,
      `<code>background-color: #CCC</code> for a light gray background`,
      `<code>background-color: rgb(0,0,128,0.5)</code> for semi-opaque dark blue background`,
      `<code>background-color: hsl(180deg, 100%, 100%)</code> for a cyan background`
    ],
    markup: markup1,
    doThis: `Use img/waves.svg as background image for h1`,
    expectedScreenshot: "img/reproduce/7-1.jpg",
    check: [
      ["background-image", "url('img/waves.svg')"]
    ]
  },

];

export const chapter8: Chapter = {
  name: "Background & Images",
  description: "Illustrating text with pictures, vector graphics or colored backgrounds",
  levels: chapter8Levels,
  wrapperClass: "menu-wrapper-part2",
  intro: `<p>The menu looks good, but it will be even better with colored backgrounds and images.</p>
  <p>We asked a photograph to take pictures of the special sushi platters. Looks delicious !</p>
  <img src="img/sushis/1.png" width="300" />
  <img src="img/sushis/2.png" width="300" />
  <img src="img/sushis/3.png" width="300" />
  <img src="img/sushis/4.png" width="300" />`,
  onLevelStart(){
    nextTick(() => {
      resetEditor();
      applyStyles()
    })
  }
}