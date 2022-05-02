import {state} from "./game";
import {levels} from "./levels";

const STORAGE_KEY = `html_css_training_progress`

const progress = {
    completed: [] as number[],
    currentLevel: 1 as number,
    hasCompleted(levelNumber: number): boolean {
        return this.completed.includes(levelNumber)
    },
    completeLevel(){
        const levelNumber = this.currentLevel
        if(!this.hasCompleted(levelNumber)){
            this.completed.push(levelNumber)
            this.save()
        }
    },
    getPercentCompleted(): number{
      return this.completed.length / levels.length * 100
    },
    hasFinished(): boolean {
      return this.completed.length >= levels.length
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
        this.currentLevel = 1
        this.completed = [];
        this.save();
    }
}

export default progress