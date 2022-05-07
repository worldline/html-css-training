import {state} from "./game";
import {chapters} from "./chapters/chapters";
import { clamp } from "./utils";

const STORAGE_KEY = `html_css_training_progress`

const progress = {
    completed: {} as { [chapter: number]: number[] },
    currentChapter: 1 as number,
    currentLevel: 0 as number,
    hasCompleted(chapterNumber: number, levelNumber: number): boolean {
        return Array.isArray(this.completed[chapterNumber]) && this.completed[chapterNumber].includes(levelNumber)
    },
    completeLevel(){
        const chapterNumber = this.currentChapter
        const levelNumber = this.currentLevel
        if(!this.hasCompleted(chapterNumber, levelNumber)){
            if(!this.completed.hasOwnProperty(chapterNumber)) this.completed[chapterNumber] = []
            this.completed[chapterNumber].push(levelNumber)
            this.save()
        }
    },
    getPercentCompleted(chapterNumber: number): number{
      if(!Array.isArray(this.completed[chapterNumber])) return 0
      return clamp(this.completed[chapterNumber].length / chapters[chapterNumber-1].levels.length * 100, 0, 100)
    },
    load(){
        try {
            Object.assign(this, JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}"))
        } catch(err){
            localStorage.removeItem(STORAGE_KEY)
            this.reset()
        }
    },
    save(){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    },
    reset(){
        this.currentChapter = 1;
        this.currentLevel = 0;
        this.completed = {};
        this.save();
    }
}

export default progress