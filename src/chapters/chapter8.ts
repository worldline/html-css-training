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

    cssImports: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRules: {},
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
        `#FF000040`,
        `hsl(0,100%,100%,25%)`,
        `hsla(0,100%,100%,25%)`,
      ].includes(val)]
    ]
  },

];

export const chapter8: Chapter = {
  name: "Background & Images",
  description: "Illustrating text with pictures, vector graphics or colored backgrounds",
  levels: chapter8Levels,
  wrapperClass: "menu-wrapper",
  intro: `<p>The menu looks good, but it will be even better with colored backgrounds and images. Let's do it !</p>
  <img src="img/sushi.webp" height="120" style="display:block; height: 120px; margin: 0 auto; box-shadow: 0 0 5px white" />`,
  onLevelStart(){
    nextTick(() => {
      resetEditor();
      applyStyles()
    })
  }
}