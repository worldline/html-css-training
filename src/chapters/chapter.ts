import { Component } from "vue";
import { Level } from "./level";

export interface Chapter {
    name: string;
    description?: string;
    intro: string;
    levels: Level[];
    rightPanelComponent: Component
    leftPanelComponent: Component
    credits?: string;
    onLevelStart?: Function;
}
