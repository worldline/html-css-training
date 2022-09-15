import { nextTick } from "vue";

import {Level} from "./level";
import { Chapter } from "./chapter";
import { cleanupEffects, shake } from "../utils";
import { completeLevelAndGoNext } from "../game";

import { addBoardElementsTooltips } from "../tooltip";
import { state } from "../state";

interface Customer {
    selector: string;
    request: string;
    meal: string;
}

export interface Chapter3Level extends Level {
    customers: Customer[];
    solution: string[]
    markup: string;
}

export function trySolution(items: string[]) {
    const level = state.level as Chapter3Level;
    const gameWrapper = document.querySelector(".game-wrapper")!;
  
    cleanupEffects();
  
    const plates = document.querySelectorAll('.table-content plate')!;
  
    let win = items.length === level.solution.length && level.solution.every((item, i) => items[i] === item);
  
    if (win) {
        gameWrapper.classList.add("win");
        plates.forEach((el) => { 
            el.classList.add("clean");
        });

      setTimeout(function () {
        gameWrapper.classList.remove("win");
        completeLevelAndGoNext();
      }, 1000);
    } else {
        items.forEach((item,i) => {
            if(level.solution[i] !== item){
                const el = plates[i] as HTMLElement
                shake(el)
            }
        })
    }
  }

export const chapter3Levels: Chapter3Level[] = [
    {
        name: "ID vs tag",
        markup: `
            <bento><plate></plate></bento>
            <bento><plate id="fancy"></plate></bento>
            <bento><plate></plate></bento>
        `,
        customers: [
            { selector: "plate", meal: "sushi", request: "Put sushis on every plate" },
            { selector: "#fancy", meal: "apple", request: "Put an apple on the fancy plate"}
        ],
        instructions: `Tag selectors have a <b>Level 1</b> specificity while ID selectors are <b>Level 3</b>.`,
        solution: ["sushi", "apple", "sushi"]
    },
    {
        name: "ID vs class vs tag",
        markup: `
            <bento><plate></plate></bento>
            <bento><plate class="square"></plate></bento>
            <bento><plate id="fancy" class="square"></plate></bento>
        `,
        customers: [
            { selector: "#fancy", meal: "pickle", request: "Put a pickle on the fancy plate"},
            { selector: "plate.square", meal: "toast", request: "Put toasts on square plates" },
            { selector: "plate", meal: "sushi", request: "Put sushis on every plate" },
        ],
        instructions: `Class selectors have a <b>Level 2</b> specificity.`,
        solution: ["sushi", "toast", "pickle"]
    },
    {
        name: "Universal selector",
        markup: `
            <bento><plate></plate></bento>
            <bento><plate></plate></bento>
            <bento><plate class="square"></plate></bento>
        `,
        customers: [
            { selector: "plate", meal: "sushi", request: "Put sushis on all plates"},
            { selector: "plate.square", meal: "toast", request: "Put toasts on square plates" },
            { selector: "*", meal: "pickle", request: "Put pickles everywhere" },
        ],
        instructions: `Universal selector has <b>Level 0</b> specificity, meaning it doesn't change specificity at all.`,
        solution: ["sushi", "sushi", "toast"]
    },
    {
        name: "Descendants calculation",
        markup: `
            <bento class="red"><plate></plate></bento>
            <bento class="green"><plate class="square"></plate></bento>
            <bento class="red"><plate class="square"></plate></bento>
            <bento class="green"><plate></plate></bento>
        `,
        customers: [
            { selector: ".green plate", meal: "pickle", request: "Put pickles on plates in green bentos"},
            { selector: ".red *", meal: "apple", request: "Put apples in red bentos" },
            { selector: ".square", meal: "toast", request: "Put toasts on square plates" }            
        ],
        instructions: `<p>Descendant selectors specificity is calculated by summing the specificity of each part.</p>
        <p>When two selectors have the same specificity, the last one is overriding the previous one.</p>`,
        solution: ["apple", "pickle", "toast", "pickle"]
    },
    {
        name: "Attribute selectors",
        markup: `
            <bento><plate class="square"for="John"></plate></bento>
            <bento><plate class="square" for="Jim"></plate></bento>
            <bento><plate for="Jane"></plate></bento>
            <bento><plate for="Juliet"></plate></bento>
        `,
        customers: [
            { selector: '[for^="J"]', meal: "sushi", request: "Put sushis on plates for names starting with J"},
            { selector: ".square", meal: "toast", request: "Put toasts on square plates" },
            { selector: '[for="John"]', meal: "pickle", request: "Put a pickle on John's plate" },
        ],
        instructions: `<p>Attribute selectors are equally specific to class selectors: <b>Level 2</b>.</p>
        <p>When two selectors have the same specificity, the last one is overriding the previous one.</p>`,
        solution: ["pickle", "toast", "sushi", "sushi"]
    },
    {
        name: "Pseudo-classes specificity",
        markup: `
            <bento><plate></plate></bento>
            <bento><plate class="square" for="Bob"></plate></bento>
            <bento><plate class="square"></plate></bento>
            <bento><plate for="Bob"></plate></bento>
        `,
        customers: [
            { selector: "plate.square", meal: "toast", request: "Put a toast on square plates" },
            { selector: 'plate:not(.square)', meal: "sushi", request: "Put sushis on all plates not square"},            
            { selector: 'plate[for="Bob"]', meal: "pickle", request: "Put a pickle on plates for Bob" },
            { selector: "plate:nth-child(2)", meal: "apple", request: "Put an apple on the second plate" },            
        ],
        instructions: `<p>Pseudo-classes selectors start with character <code>:</code> and are also <b>Level 2</b>.</p>
        <p>When a pseudo-class expects arguments, like <code>:has()</code> or <code>:not()</code>, you must add the specificity of the most specific argument.</p>`,
        solution: ["sushi", "apple", "toast", "sushi"]
    },
    {
        name: "Siblings calculation",
        markup: `
            <bento class="red">
                <plate></plate>
                <plate></plate>
                <plate></plate>
            </bento>
            <bento class="blue">
                <plate class="square"></plate>
                <plate class="square"></plate>
                <plate class="square"></plate>
            </bento>
        `,
        customers: [
            { selector: "plate:first-child", meal: "toast", request: "Put toasts on first plates of each bento"},
            { selector: ".square + plate", meal: "apple", request: "Put apples on plates at the right of a square plate" },
            { selector: "plate ~ plate", meal: "sushi", request: "Put sushis on plates following another plate" },
        ],
        instructions: `<p>Sibling selectors follow the same rule than descendant selectors: sum the specificity of each part.</p>`,
        solution: ["toast", "sushi", "sushi", "toast", "apple", "apple"]
    },
    {
        name: "!important",
        markup: `
            <bento><plate class="square"></plate></bento>
            <bento class="blue"><plate class="square"></plate></bento>
            <bento class="blue"><plate class="square" for="James"></plate></bento>
        `,
        customers: [
            { selector: "plate.square", meal: "toast", request: "Put a toast on square plates" },
            { selector: 'plate[for="James"]', meal: "apple!important", request: "It is CRUCIAL that James get an apple" },
            { selector: '.blue plate.square', meal: "sushi", request: "Put sushis on square plates on blue bentos"},
        ],
        instructions: `<p><code>!important</code> is a per-property modifier with the highest specificity: <b>Level 5</b>.</p>
        <p>It even overrides inline styles passed through the <code>style</code> attribute of an HTML element.</p>
        <p>You should not use this modifier except in very specific cases like utility classes or user stylesheets.</p>`,
        solution: ["toast", "sushi", "apple"]
    },
    {
        name: "Final Challenge",
        markup: `
            <bento class="green">
                <plate class="square" id="fancy"></plate>
                <plate></plate>
                <plate class="square"></plate>
            </bento>
            <bento>
                <plate class="square"></plate>
                <plate></plate>
                <plate class="square"></plate>
            </bento>
        `,
        customers: [
            { selector: "bento.green *", meal: "pickle", request: "Put pickles in green bentos"},
            { selector: "#fancy", meal: "apple", request: "Put an apple on the fancy plate" },
            { selector: "plate:first-child", meal: "toast", request: "Put toasts on the first plate of each bento" },
            { selector: "plate:not(.square)", meal: "sushi", request: "Put sushis on plates not square" },
        ],
        instructions: `<p>Combine all what you learned to solve this one!</p>`,
        solution: ["apple", "sushi", "pickle", "toast", "sushi", ""]
    },
]

export const chapter3: Chapter = {
    name: "CSS Specificity",
    description: "When two properties override each other, the more specific selector wins",
    intro: `
    <p>Each selector in CSS has a certain level of specificity. For example, <code>div</code> has a low specificity because it targets any <tag>div</tag> in the document, while <code>#login-box</code> has a higher specificity because it only targets a element with a specific ID.</p>
    <p>The specificity matters when an element matches two selectors or more with conflicting properties assignment. The final property will be the one associated to the selector having the highest specificity.</p>
    <p>In this chapter, we will see how specificity is calculated and how you can use it to properly override styles.</p>`,
    instructions: `
    <p>Your customers have ordered a meal, but with conflicting instructions. The more specific the request, the higher the priority should be.</p>
    <p>Select the appropriate meal for each customer. You can change the meal by clicking on the plate.</p>
    <p>To help you, here is a <a target="_blank" href="img/specifishity.png">cheat sheet on specificity explained with fish</a>.</p>`,
    levels: chapter3Levels,
    onLevelStart(){
        nextTick(() => addBoardElementsTooltips())
    }
}