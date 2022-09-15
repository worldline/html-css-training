import {state} from "./state";
import {chapters} from "./chapters/chapters";
import { clamp } from "./utils";

const STORAGE_KEY = `html_css_training_progress`

export function hasCompleted(chapterNumber: number, levelNumber: number): boolean {
    return Array.isArray(state.progress.completed[chapterNumber]) 
    && state.progress.completed[chapterNumber].includes(levelNumber)
}

export function completeLevel(){
    const chapterNumber = state.progress.currentChapter
    const levelNumber = state.progress.currentLevel
    if(!hasCompleted(chapterNumber, levelNumber)){
        if(!state.progress.completed.hasOwnProperty(chapterNumber)) state.progress.completed[chapterNumber] = []
        state.progress.completed[chapterNumber].push(levelNumber)
        saveProgress()
    }
}

export function getPercentCompleted(chapterNumber: number): number{
    if(!Array.isArray(state.progress.completed[chapterNumber])) return 0
    return clamp(state.progress.completed[chapterNumber].length / chapters[chapterNumber-1].levels.length * 100, 0, 100)
}

export function loadProgress(){
    try {
        Object.assign(state.progress, JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}"))
    } catch(err){
        localStorage.removeItem(STORAGE_KEY)
        resetProgress()
    }
}

export function saveProgress(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

export function resetProgress(){
    state.progress = {
        currentChapter: 1,
        currentLevel: 0,
        completed: {}
    }
    saveProgress()
}