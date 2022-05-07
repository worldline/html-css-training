import {chapter2Levels} from "./chapter2";
import {computed, Ref} from "vue";

import GameWrapper from "../components/GameWrapper.vue"

import Chapter2LevelInstructions from "../components/Chapter2LevelInstructions.vue";
import {state} from "../game";
import { Chapter } from "./chapter";
import { chapter1 } from "./chapter1";



const chapter2: Chapter = {
    name: "CSS - Selectors",
    levels: chapter2Levels,
    leftPanelComponent: GameWrapper,
    rightPanelComponent: Chapter2LevelInstructions,
    credits: `Credits: <a href="http://www.twitter.com/flukeout">@flukeout</a>`
}

export const chapters: Chapter[] = [
    chapter1,
    chapter2
]

export const currentChapter: Ref<Chapter> = computed(() => chapters[state.progress.currentChapter - 1])