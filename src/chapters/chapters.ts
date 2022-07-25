import {computed, Ref} from "vue";
import {state} from "../game";

import {Chapter} from "./chapter";
import {chapter1} from "./chapter1";
import {chapter2} from "./chapter2";
import {chapter3} from "./chapter3";
import {chapter4} from "./chapter4";
import {chapter5} from "./chapter5";

export const chapters: Chapter[] = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5
]

export const currentChapter: Ref<Chapter> = computed(() => chapters[state.progress.currentChapter - 1])