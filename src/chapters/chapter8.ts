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
  expectedScreenshot: string;
}

const markup1 = `
<h1>Chef Nakamura's Restaurant</h1>
<main>
  <h2>Special Sushi Platters</h2>
  <ul>
    <li>
      <img src="img/sushis/1.png" width="200" />
      <span class="dish-name">Sushi Mori</span>
      <span class="price">$21.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 16 pieces of Sushi with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>
    </li>
    <li>
      <img src="img/sushis/2.png" width="200" />
      <span class="dish-name">Maki Mori</span>
      <span class="price">$23.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 26 pieces of Maki with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>        
    </li>
  </ul>    
</main>`


const markup2 = `
<h1>Chef Nakamura's Restaurant</h1>
<main>
  <img src="img/picture.jpg" id="chef-picture" alt="Picture of Chef Nakamura" />
  <h2>Special Sushi Platters</h2>
  <ul>
    <li>
      <img src="img/sushis/1.png" width="200" />
      <span class="dish-name">Sushi Mori</span>
      <span class="price">$21.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 16 pieces of Sushi with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>
    </li>
    <li>
      <img src="img/sushis/2.png" width="200" />
      <span class="dish-name">Maki Mori</span>
      <span class="price">$23.90</span>
      <p class="dish-details">Served in a traditional wood boat platter, it is composed of 26 pieces of Maki with cooked rice and wasabi. Served with Miso Soup and Cabbage Salad at demand. Quantity recommended for 4 persons.</p>        
    </li>
  </ul>    
</main>`

const baseStyles = {
  "h1": ["font-family: 'Reggae One', serif"],
  "img#chef-picture": ["display: block", "width: 100%"],
  ".dish-name": ["font-variant: small-caps", "font-size: 140%"],
  ".price": ["font-weight: bold", "margin-left: 1em"]
}

export const chapter8Levels: Chapter8Level[] = [

  {
    name: "Background color",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { ...baseStyles },
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
    expectedScreenshot: "img/reproduce/8-1.jpg",
    check: [
      ["background-color", 
        `rgba(255,0,0,0.25)`,
        `rgba(255,0,0,.25)`,
        `rgba(255,0,0,25%)`,
        `rgb(255,0,0,0.25)`,
        `rgb(255,0,0,.25)`,
        `rgb(255,0,0,25%)`,
        `#ff000040`,
        `hsl(0,100%,100%,25%)`,
        `hsla(0,100%,100%,25%)`,
      ]
    ]
  },

  {
    name: "Background images",
    selector: "h1",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      ...baseStyles,
      "h2": ["background-color: #ff000040"],      
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
    expectedScreenshot: "img/reproduce/8-2.jpg",
    check: [
      ["background-image", "url('img/waves.svg')"]
    ]
  },

  {
    name: "Background properties",
    selector: "h1",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      ...baseStyles,
      "h1": ["font-family: 'Reggae One', serif", ],
      "h2": ["background-color: #ff000040"]
    },
    cssRules: {
      "h1": ["color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')"]
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
    expectedScreenshot: "img/reproduce/8-3.jpg",
    check: [
      ["background-size", "400px", "400px 400px"]
    ]
  },

  {
    name: "Linear gradients",
    selector: "h2",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      ...baseStyles,
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
    help: `<p>CSS provides useful functions to make color gradients. Color gradients are considered as generated images, to be used with <code>background-image</code> property. To avoid overlapping with existing <code>background-color</code>, we recommend using the <code>background</code> shorthand property to reset everything.</p>
    <p>For linear gradients, going in any direction, use the <code>linear-gradient()</code> function.</p>`,
    examples: [
      `<code>background: linear-gradient(45deg, blue, red)</code>`,
      `<code>background: linear-gradient(to right, #FFFFFF, transparent)</code>`,
      `<code>background: linear-gradient(red 40%, yellow 30%, blue 65%);</code>`
    ],
    markup: markup1,
    doThis: `Make a linear gradient for h2, from pink on top to transparent on bottom`,
    expectedScreenshot: "img/reproduce/8-4.jpg",
    check: [
      ["background",
        "linear-gradient(to bottom, pink, transparent)",
        "linear-gradient(to top, transparent, pink)",
        "linear-gradient(180deg, pink, transparent)",
        "linear-gradient(0deg, transparent, pink)"
      ]
    ]
  },

  {
    name: "Radial gradients",
    selector: "main",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: {
      ...baseStyles,
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')", "background-size: 400px"],
      "h2": ["background: linear-gradient(to bottom, pink, transparent)"]
    },
    cssRules: {
      
    },
    syntax: `background: radial-gradient(
  <shape> / <size> /<position>,
  ...<colors>
);`,
    help: `<p>CSS provides useful functions to make color gradients. Color gradients are considered as generated images, to be used with <code>background-image</code> property. To avoid overlapping with existing <code>background-color</code>, we recommend using the <code>background</code> shorthand property to reset everything.</p>
    <p>Radial gradients can be made of circles or ellipses going through two colors or more.</p>`,
    examples: [
      `<code>background: radial-gradient(red, blue);</code> makes a gradient red at center and blue at the edge`,
      `<code>radial-gradient(circle at center, red 0, blue, green 100%)</code> makes a gradient at the center of its container,
      starting red, changing to blue, and finishing green`,
      `<code>radial-gradient(
        farthest-corner at 20% 20%,
        yellow 0%,
        cyan 100%
      );</code> makes a non centered gradient with a yellow circle at top left`
    ],
    markup: markup1,
    doThis: `Make a radial gradient for main content, from #fff0e0 at center to #ffc0b0 at the edge`,
    expectedScreenshot: "img/reproduce/8-5.jpg",
    check: [
      ["background", 
        "radial-gradient(#fff0e0, #ffc0b0)",
        "radial-gradient(circle, #fff0e0 0, #ffc0b0 100%)",
        "radial-gradient(circle at center, #fff0e0 0, #ffc0b0 100%)"
      ]
    ]
  },

  {
    name: "Object fit",
    selector: "img#chef-picture",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: { 
      ...baseStyles,
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')", "background-size: 400px"],
      "h2": ["background: linear-gradient(to bottom, pink, transparent)"],
      "main": ["background: radial-gradient(#fff0e0, #ffc0b0)"]
    },
    cssRules: {
      "img#chef-picture": ["display: block", "width: 100%", "height: 200px"]
    },
    syntax: `object-fit: <mode>`,
    help: `<p>The <code>object-fit</code> property changes how a media element like <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code> is resized according to its container dimensions.</p>
    <p>Values accepted are:</p>
    <dl>
      <dt>fill (default)</dt>
      <dd>The object is stretched to fill the entire box</dd>
      <dt>contain</dt>
      <dd>The object is scaled to maintain its aspect ratio while fitting within the box. This can add blank space around the image.</dd>
      <dt>cover</dt>
      <dd>The object is scaled to maintain its aspect ratio while fitting within the box. This can add blank space around the image.</dd>
      <dt>none</dt>
      <dd>The object is not resized at all, preserving its original dimensions</dd>
      <dt>scale-down</dt>
      <dd>If the object original dimensions do not fit in the box, scale down like <code>contain</code>, otherwise preserve original dimensions.</dd>
    </dl>`,
    examples: [],
    markup: markup2,
    doThis: `Make the image cover the entire zone without stretching`,
    expectedScreenshot: "img/reproduce/8-6.jpg",
    check: [
      ["object-fit", "cover"]
    ]
  },

  {
    name: "Object position",
    selector: "img#chef-picture",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: {
      ...baseStyles,
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')", "background-size: 400px"],
      "h2": ["background: linear-gradient(to bottom, pink, transparent)"],
      "main": ["background: radial-gradient(#fff0e0, #ffc0b0)"]
    },
    cssRules: {
      "img#chef-picture": ["display: block", "width: 100%", "height: 200px", "object-fit: cover"]
    },
    syntax: `object-position: <x> <y>`,
    help: `<p>The <code>object-position</code> property changes how a media element center is aligned with the center of its container box.</p>
    <p>You can use it to change the cropped part of an image that does not fit in its box.</p>`,
    examples: [],
    markup: markup2,
    doThis: `Change the picture position so we can see both the boat and the chef face.`,
    expectedScreenshot: "img/reproduce/8-7.jpg",
    check: [
      ["object-position", val => {
        if(!val) return false
        const y = Number((val.split(" ")[1] || "").replace("px",""));
        return !isNaN(y) && y >= -80 && y <= -20
      }]
    ]
  },

  {
    name: "Image shapes",
    selector: "li img",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: {
      ...baseStyles,
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')", "background-size: 400px"],
      "h2": ["background: linear-gradient(to bottom, pink, transparent)"],
      "main": ["background: radial-gradient(#fff0e0, #ffc0b0)"],
      "img#chef-picture": ["display: block", "width: 100%", "height: 200px", "object-fit: cover", "object-position: 0 -50px"]
    },
    cssRules: {
      
    },
    syntax: `shape-outside: <url>
shape-outside: <box>
shape-outside: <shape>`,
    help: `<p>The <code>shape-outside</code> property let you change the shape around which the adjacent inline content should wrap. By default, the shape is the rectangular margin box, but you may prefer a circle, a custom polygon or a zone defined by the transparent parts of a PNG file.</p>`,
    examples: [
      `<code>shape-outside: content-box;</code> will make adjacent inline content ignore the element margins and borders`,
      `<code>shape-outside: circle(50%);</code> will make the shape a circle of 50% radius`,
      `<code>shape-outside: polygon(50% 0, 100% 100%, 0 100%);</code> will make the shape a equilateral triangle`,
      `<code>shape-outside: url('shape.png');</code> will use the transparent parts of the image to define the shape`
    ],
    markup: markup2,
    doThis: `Make the platter images float on the right and text follow their shape.`,
    expectedScreenshot: "img/reproduce/8-8.jpg",
    inputLinesNumber: 2,
    check: [
      ["float", "right"],
      ["shape-outside", "url('img/sushis/1.png')", "url('img/sushis/2.png')"]
    ]
  },

  {
    name: "Shape margins",
    selector: "li img",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: {
      ...baseStyles,
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')", "background-size: 400px"],
      "h2": ["background: linear-gradient(to bottom, pink, transparent)"],
      "main": ["background: radial-gradient(#fff0e0, #ffc0b0)"],
      "img#chef-picture": ["display: block", "width: 100%", "height: 200px", "object-fit: cover", "object-position: 0 -50px"]
    },
    cssRules: {
      "li img": ["float: right"],
      "li:nth-child(1) img": ["shape-outside: url('img/sushis/1.png')"],
      "li:nth-child(2) img": ["shape-outside: url('img/sushis/2.png')"],
    },
    syntax: `shape-margin: <dim>`,
    help: `
    <p>As you can see, we had to declare custom shapes for each image. Ideally we would like to use <code>shape-outside: attr(src url);</code> to make each image element use the shape defined by its own image file; unfortunately this is not supported yet by browsers, despite being in the CSS specification.</p>
    <p>Now, you might want to add a margin to the shape you just defined. Use the <code>shape-margin</code> property to add a custom margin to the shape.</p>`,
    markup: markup2,
    doThis: `Add a 10px margin to platters images shapes.`,
    expectedScreenshot: "img/reproduce/8-9.jpg",
    check: [
      ["shape-margin", "10px"]
    ]
  },

  {
    name: "Image Filters",
    selector: "img#chef-picture",
    cssImportsHidden: ["https://fonts.googleapis.com/css?family=Reggae+One"],
    cssRulesHidden: {
      ...baseStyles,
      "h1": ["font-family: 'Reggae One', serif", "color: white", "text-shadow: 0 0 0.5em black", "background-image: url('img/waves.svg')", "background-size: 400px"],
      "h2": ["background: linear-gradient(to bottom, pink, transparent)"],
      "main": ["background: radial-gradient(#fff0e0, #ffc0b0)"],
      "img#chef-picture": ["display: block", "width: 100%", "height: 200px", "object-fit: cover", "object-position: 0 -50px"],
      "li img": ["float: right", "shape-margin: 10px"],
      "li:nth-child(1) img": ["shape-outside: url('img/sushis/1.png')"],
      "li:nth-child(2) img": ["shape-outside: url('img/sushis/2.png')"],
    },
    cssRules: {
      
    },
    syntax: `filter: ...<filters>
filter: blur(<dim>)
filter: brightness(<val>)
filter: contrast(<val>)
filter: drop-shadow(<x> <y> <dim> <color>)
filter: grayscale(<val>)
filter: hue-rotate(<angle>)
filter: invert(<val>)
filter: opacity(<val>)
filter: saturate(<val>)
filter: sepia(<val>)`,
    help: `
    <p>CSS has built-in functions to apply filters to images, for example to change its brightness, contrast, saturation, hue etc.</p>
    <p>You can add as many filters as you want in the <code>filter</code> property, separated by whitespaces.</p>`,
    examples: [
`<code>filter: blur(5px);</code>`,
`<code>filter: brightness(0.4);</code>`,
`<code>filter: contrast(200%);</code>`,
`<code>filter: drop-shadow(16px 16px 20px blue);</code>`,
`<code>filter: grayscale(50%);</code>`,
`<code>filter: hue-rotate(90deg);</code>`,
`<code>filter: invert(75%);</code>`,
`<code>filter: opacity(25%);</code>`,
`<code>filter: saturate(30%);</code>`,
`<code>filter: sepia(60%);</code>`,
    ],
    markup: markup2,
    doThis: `Change the brightness and saturation of the picture to 120%`,
    expectedScreenshot: "img/reproduce/8-10.jpg",
    check: [
      ["filter", "brightness(120%) saturate(120%)", "brightness(1.2) saturate(1.2)", "saturate(120%) brightness(120%)", "saturate(1.2) brightness(1.2)"]
    ]
  },

  /*
  picture filters
  */

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