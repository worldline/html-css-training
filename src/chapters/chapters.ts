import {Level} from "./level";
import {chapter1Levels} from "./chapter1";
import {chapter2Levels} from "./chapter2";

interface Chapter {
    name: string;
    levels: Level[];
}

const chapter1: Chapter = { name: "HTML - Semantics", levels: chapter1Levels }
const chapter2: Chapter = { name: "CSS - Selectors", levels: chapter2Levels }

export const chapters: Chapter[] = [
    chapter1,
    chapter2
]