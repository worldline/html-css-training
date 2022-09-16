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
  background-image, repeat, position, size
  linear-gradient
  radial-gradient
  
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
    <dt>A color name</dt><dd>red, blue, transparent, or any of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color" target="_blank">145</a> official color names in CSS.</dd>
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
    help: `<p>Use <code>background-image</code> to use an image file as the background of an element.</p>
    <p>To specify the image file, use the <code>url()</code> keyword.</p>
    `,
    examples: [
      `<code>background-image: url("path/to/image.jpg")</code>`
    ],
    markup: markup1,
    doThis: `Use img/waves.svg as background image for h1`,
    expectedScreenshot: "img/reproduce/7-1.jpg",
    check: [
      ["background-image", "url('img/waves.svg')"]
    ]
  },

  {
    name: "Background properties",
    selector: "h1",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black"],
      "h2": ["background-color: #ff000040"]
    },
    cssRules: {
      "h1": ["background-image: url('img/waves.svg')"]
    },
    syntax: `background-size: <size>;
background-repeat: <mode>;
background-position: <x> <y>
`,
    help: `<p>Background can be tweaked in many ways. By default, when the image is not big enough to cover the entire element background, the image is being repeated.</p>
    <p>This behavior can be changed with <code>background-repeat: no-repeat;</code>. You can also decide to only repeat on one axis with <code>repeat-x</code> or <code>repeat-y</code>.</p>
    <p>You can also change the size of the background with <code>background-size</code>, or its starting position with <code>background-position</code>.</p>
    <p>All these properties can be specified at one with the shorthand <code>background</code> property</p>
    `,
    examples: [
      `<code>background: url('image.jpg') cover no-repeat;</code> to stretch and fill the image to cover all the background`,
      `<code>background: url('pattern.svg') center 100px repeat</code> to repeat a 100x100px pattern`
    ],
    markup: markup1,
    doThis: `Set the background size to 400px`,
    expectedScreenshot: "img/reproduce/7-1.jpg",
    check: [
      ["background-size", val => val === "400px" || val === "400px 400px"]
    ]
  },

  {
    name: "Linear gradients",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')", "background-size: 400px"],
      "h2": ["background-color: #ff000040"]
    },
    cssRules: {
      
    },
    syntax: `background: linear-gradient(
  <angle>, 
  <startColor>,
  <endColor>
);`,
    help: `<p>CSS provides useful functions to make color gradients. Color gradients are considered as generated images, to be used with <code>background-image</code> property.</p>
    <p>For linear gradients, going in any direction, use the <code>linear-gradient()</code> function.</p>`,
    examples: [
      `<code>background: linear-gradient(45deg, blue, red)</code>`,
      `<code>background: linear-gradient(to right, #FFFFFF, transparent)</code>`,
      `<code>background: linear-gradient(red 40%, yellow 30%, blue 65%);</code>`
    ],
    markup: markup1,
    doThis: `Make a linear gradient for h2, from brown on top to transparent on bottom`,
    expectedScreenshot: "img/reproduce/7-1.jpg",
    check: [
      ["background", val => val === "linear-gradient(to bottom, brown, transparent)"
       || val === "linear-gradient(to top, transparent, brown)"
       || val === "linear-gradient(180deg, transparent, brown)"
       || val === "linear-gradient(0deg, transparent, brown)"
      ]
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