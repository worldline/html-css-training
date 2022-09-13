import { Component } from "vue";
import { Level } from "./level";

export interface Chapter {
    name: string;
    description?: string;
    intro: string;
    instructions?: string;
    levels: Level[];
    rightPanelComponent: Component
    leftPanelComponent: Component
    gameContainerSelector?: string;
    credits?: string;
    onLevelStart?: Function;
}
