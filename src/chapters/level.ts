import { state } from "../game";

export interface Level {
    name: string;
    instructions?: string;
    markup?: string;
    skippable?: boolean;
    inputLinesNumber?: number;
    wrapperClass?: string;
}


export interface CssEditorLevel extends Level {
    containerStyles?: string;
    cssRules?: { [selector:string]: string[] };
    cssRulesHidden?: { [selector:string]: string[] };
    cssImports?: string[];
    cssImportsHidden?: string[];
    selector: string;
}

export function resetEditor(){
    const editorInput = document.querySelector(".editor textarea");
    if(editorInput instanceof HTMLTextAreaElement){
      editorInput.value = "";
      editorInput.focus()
    }
}

export function applyInitialStyles(workingElementSelector: string){
    const level = state.level as CssEditorLevel;
    const container = document.querySelector(workingElementSelector);
    if(!container) return;

    container.setAttribute("style", level.containerStyles ?? "")

    const selectors = new Set([level.selector, ...Object.keys(level.cssRules ?? {}), ...Object.keys(level.cssRulesHidden ?? {})])
    for(let selector of selectors){
      container.querySelectorAll(selector).forEach(el => {
        const styleAttr = el.getAttribute("data-existing-style") ?? el.getAttribute("style") ?? ""
        el.setAttribute("data-existing-style", styleAttr)
        const styles = [styleAttr]
        if(level.cssRulesHidden && selector in level.cssRulesHidden) styles.push(...level.cssRulesHidden[selector])
        if(level.cssRules && selector in level.cssRules) styles.push(...level.cssRules[selector])
        el.setAttribute("style", styles.join(";"))
      })
    }
}