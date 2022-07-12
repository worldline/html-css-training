import SpecificityGame from "../components/SpecificityGame.vue";
import LevelInstructions from "../components/LevelInstructions.vue";
import {Level} from "./level";
import { Chapter } from "./chapter";

export interface Chapter3Level extends Level {
    instructions: string;
    order?: string;
    tag?: string;
    type?: string;
}

export const chapter3Levels: Chapter3Level[] = [
    {
        name: "Specificity game 1",
        instructions: `
        <p>Your clients have specific requests for their table. The more specific they are, the more important is their request.</>
        <p>Pick the appropriate colors for each table according to the requests of the customers.</p>
        <p>You can change the color of a table by clicking on it.</p>`
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