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
    check: [string, ...(string | ((val: string) => boolean))[]][];
}