import { reactive, Ref, computed } from "vue"
import { Chapter } from "./chapters/chapter"
import { chapter1Levels } from "./chapters/chapter1"
import { chapters } from "./chapters/chapters"
import { Level } from "./chapters/level"

interface Progress {
    completed: { [chapter: number]: number[] },
    inputs: { [chapter: number]: { [level: number]: string } }
    currentChapter: number,
    currentLevel: number,
}

interface AppState {
    progress: Progress
    level: Level
    menuOpened: boolean
}

export const state = reactive({
    progress: {
        completed: {},
        inputs: {},
        currentChapter: 1,
        currentLevel: 0
    },
    level: chapter1Levels[0],
    menuOpened: false
}) as AppState

window.state = state

export const currentChapter: Ref<Chapter> = computed(() => chapters[state.progress.currentChapter - 1])