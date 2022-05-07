import { state, completeLevel } from "../game";
import { shake } from "../utils";
import {Level} from "./level";
import InteractiveDOM from "../components/InteractiveDOM.vue";
import LevelInstructions from "../components/LevelInstructions.vue";

export interface Chapter1Level extends Level {
    instructions: string;
    order?: string;
}

export const chapter1Levels: Chapter1Level[] = [
    {
        name: "Welcome to this training session !",
        instructions: `<img src="img/chef.png" style="width: 88px; margin-right: 0 auto"/>
        <p>During this training, we will be working on the website of Chef Nakamura's brand new restaurant.</p>
        <p>You can see the homepage on the left. It's basic, but it's a start !</p>`
    },
    {
        name: "HTML & DOM",
        instructions: `
        <p>All the content on this page is actually composed of HTML elements grouped in a tree structure called the <strong>DOM</strong>, for Document Object Model</p>
        <p>Click on the <b>3D</b> button on top right to see a 3D representation of this tree structure.</p>
        <p>Move the mouse around to observe the structure. Holding the <b>Ctrl</b> key stops the camera movement.</p>`
    },
    {
        name: "Main root tags",
        instructions: `
        <p>HTML5 has around <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">a hundred of different tags</a>. 
        Each tag has a specific purpose to describe something in a web document.</p>
        <h3 class="syntax">&lt;html&gt;</h3>
        <p>Root tag to describe a HTML document</p>
        <h3 class="syntax">&lt;body&gt;</h3>
        <p>Contains all the content of the document</p>
        <h3 class="syntax">&lt;head&gt;</h3>
        <p>Contains metadata associated to the document, like page title, styles, scripts</p>
        <hr>
        <p>Right click on the restaurant website background and select <b>Show frame source</b> to see the HTML source code of the document. 
        Find the <tag>head</tag> tag and note the different information put inside.</p>        
        `
    },
    {
        name: "Content sections: <main>",
        order: "Click on <main> element",
        selector: "main",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines.</p>
        <h3 class="syntax">&lt;main&gt;</h3>
        <p>Dominant section of content, related to the central topic of the document</p>        
        `
    },
    {
        name: "Content sections: <aside>",
        order: "Click on <aside> element",
        selector: "aside",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines.</p>

        <h3 class="syntax">&lt;aside&gt;</h3>
        <p>Content indirectly related to the main content of the document. Frequently used for side panels.</p>
        <hr>
        <p>Click on the <tag>aside</tag> element on the restaurant website.</p>
        `
    },
    {
        name: "Content sections: <header>",
        order: "Click on <header> element",
        selector: "header",
        instructions: `
        <p>Properly describing the different sections of a web document helps for accessibility tools and for the indexability by search engines.</p>

        <h3 class="syntax">&lt;header&gt;</h3>
        <p></p>
        <hr>
        <p>Click on the <tag>header</tag> element on the restaurant website.</p>
        `
    },
]

export const chapter1: Chapter = {
    name: "HTML - Semantics",
    levels: chapter1Levels,
    leftPanelComponent: InteractiveDOM,
    rightPanelComponent: LevelInstructions
}