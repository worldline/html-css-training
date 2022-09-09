import {computed, Ref} from "vue";
import {state} from "../game";

import {Chapter} from "./chapter";
import {chapter1} from "./chapter1";
import {chapter2} from "./chapter2";
import {chapter3} from "./chapter3";
import {chapter4} from "./chapter4";
import {chapter5} from "./chapter5";
import {chapter6} from "./chapter6";
import {chapter7} from "./chapter7";

export const chapters: Chapter[] = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7
]

export const currentChapter: Ref<Chapter> = computed(() => chapters[state.progress.currentChapter - 1])