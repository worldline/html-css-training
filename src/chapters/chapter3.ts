import SpecificityGame from "../components/SpecificityGame.vue";
import LevelInstructions from "../components/LevelInstructions.vue";
import {Level} from "./level";
import { Chapter } from "./chapter";
import Table from "../components/Table.vue";

interface Customer {
    selector: string;
    request: string;
    meal: string;
}

export interface Chapter3Level extends Level {
    customers: Customer[];
    solution: string[]
    tableMarkup: string;
}

export const chapter3Levels: Chapter3Level[] = [
    {
        name: "Specificity game 1",
        instructions: `
        <p>Your customers have ordered a meal, but with conflicting instructions. <b>The more specific the request, the higher the priority should be.</b></p>
        <p>Select the appropriate meal for each customer. You can change the meal by clicking on the plate.</p>`,
        tableMarkup: `
            <bento><plate></plate></bento>
            <bento><plate id="fancy"></plate></bento>
            <bento><plate></plate></bento>
        `,
        customers: [
            { selector: "plate", meal: "sushi", request: "Put sushis on every plate" },
            { selector: "#fancy", meal: "apple", request: "Put an apple on the fancy plate"}
        ],
        solution: ["sushi", "apple", "sushi"]
    }
]

export const chapter3: Chapter = {
    name: "CSS - Specificity",
    description: "When two selectors disagree, the more specific wins",
    intro: `
    <p>Each selector in CSS has a certain level of specificity. For example, <code>div</code> has a low specificity because it targets any <tag>div</tag> in the document, while <code>#login-box</code> has a higher specificity because it only targets a element with a specific ID.</p>
    <p>The specificity matters when an element matches two selectors or more with conflicting properties assignment. The final property will be the one associated to the selector having the highest specificity.</p>
    <p>In this chapter, we will see how specificity is calculated and how you can use it to properly override styles.</p>`,
    levels: chapter3Levels,
    leftPanelComponent: SpecificityGame,
    rightPanelComponent: LevelInstructions
}