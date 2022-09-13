export interface Level {
    name: string;
    instructions?: string;
    markup?: string;
    skippable?: boolean;
    inputLinesNumber?: number;
    wrapperClass?: string;
}

export interface CssEditorLevel extends Level {
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