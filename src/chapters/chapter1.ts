import {Level} from "./level";

interface Chapter1Level extends Level {
    markup: string;
}

export const chapter1Levels: Chapter1Level[] = [
    {
        name: "HTML & DOM",
        markup: "<h1>Hello World</h1>"
    }
]