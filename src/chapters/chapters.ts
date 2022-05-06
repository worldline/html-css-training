import {Level} from "./level";
import {chapter1Levels} from "./chapter1";
import {chapter2Levels} from "./chapter2";
import {Component, computed, Ref} from "vue";
import InteractiveDOM from "../components/InteractiveDOM.vue";
import GameWrapper from "../components/GameWrapper.vue"
import LevelInstructions from "../components/LevelInstructions.vue";
import Chapter2LevelInstructions from "../components/Chapter2LevelInstructions.vue";
import {state} from "../game";


interface Chapter {
    name: string;
    levels: Level[];
    rightPanelComponent: Component
    leftPanelComponent: Component
}

const chapter1: Chapter = {
    name: "HTML - Semantics",
    levels: chapter1Levels,
    leftPanelComponent: InteractiveDOM,
    rightPanelComponent: LevelInstructions
}
const chapter2: Chapter = {
    name: "CSS - Selectors",
    levels: chapter2Levels,
    leftPanelComponent: GameWrapper,
    rightPanelComponent: Chapter2LevelInstructions
}

export const chapters: Chapter[] = [
    chapter1,
    chapter2
]

export const currentChapter: Ref<Chapter> = computed(() => chapters[state.progress.currentChapter - 1])