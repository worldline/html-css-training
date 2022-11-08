import {hideAllPoppers} from "floating-vue";
import {clamp} from "./utils";
import {chapters} from "./chapters/chapters";
import { state, currentChapter } from "./state";
import { completeLevel, saveProgress } from "./progress";
import { Level } from "./chapters/level";

export function closeMenu(){
    state.menuOpened = false;
}

// Reset all progress
// * Removes checkmarks from level header and list
// * Scrolls level menu to top
// * Resets the progress object

export function resetProgress(){
    if(confirm("Do you really want to reset your progress ?")){
        resetProgress();
        loadLevel();
        closeMenu();
    }
}

export function completeLevelAndGoNext(){
    completeLevel();
    goToNextLevel();
}

export function goToNextLevel(){
    const { currentChapter, currentLevel } = state.progress
    if(currentChapter < 1) goToLevel(1,0)
    else if(currentLevel >= chapters[currentChapter-1].levels.length){
        if(currentChapter >= chapters.length) return;
        goToLevel(currentChapter+1, 0)
    } else {
        goToLevel(currentChapter, currentLevel+1)
    }
}

export function goToPreviousLevel(){
    const { currentChapter, currentLevel } = state.progress
    if(currentChapter < 1) return;
    else if(currentLevel < 1) goToLevel(currentChapter-1, currentChapter === 1 ? 0 : chapters[currentChapter-2].levels.length)
    else goToLevel(currentChapter, currentLevel-1)
}

export function goToLevel(chapterNumber: number, levelNumber: number){
    const newChapter = clamp(chapterNumber, 0, chapters.length)
    const nbLevels = chapterNumber === 0 ? 0 : chapters[chapterNumber-1].levels.length
    const newLevel = clamp(levelNumber, 0, nbLevels)
    if(newLevel !== state.progress.currentLevel || newChapter !== state.progress.currentChapter){
        state.progress.currentChapter = newChapter
        state.progress.currentLevel = newLevel
        hideAllPoppers()
        loadLevel();
        closeMenu();
    }
}

export function loadLevel(){    
    const chapter = currentChapter.value
    const levels = chapter.levels 
    state.progress.currentLevel = clamp(state.progress.currentLevel, 0, levels.length)
    saveProgress()
    if((state.progress.currentLevel-1) in levels){
        state.level = levels[state.progress.currentLevel-1] as Level;
        if(chapter.onLevelStart) chapter.onLevelStart(state.level)
    }
}