import {Chapter} from "./chapter";
import {chapter1} from "./chapter1";
import {chapter2} from "./chapter2";
import {chapter3} from "./chapter3";
import {chapter4} from "./chapter4";
import {chapter5} from "./chapter5";
import {chapter6} from "./chapter6";
import {chapter7} from "./chapter7";
import {chapter8} from "./chapter8";

export const chapters: Chapter[] = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8
]

export const IntroChapter: Chapter = {
    name: "Welcome",    
    intro: `
    <p>This website is a collection of exercises to learn HTML and CSS while having fun.</p>
    <p>It is a fork of <a href="https://flukeout.github.io/" target="_blank">CSS Diner</a> by <a href="http://www.twitter.com/flukeout" target="_blank">@flukeout</a>,
    and is heavily inspired by many other CSS Games in the open source community.</p>
    <p>Click on the Next button below or use <kbd>⇞</kbd> <kbd>⇟</kbd> keys to navigate between levels.</p>`,
    description: "Let's begin !",
    levels: []
}