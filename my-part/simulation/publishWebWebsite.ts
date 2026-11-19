import type {GameState,WebFiles} from "./models/GameState";
import {createWebsite} from "./createWebsite";
import {Game} from "phaser";

export function publishWebWebsite(
    state : GameState,
    files : WebFiles,
): GameState{
    if (!files.html.trim()) return state;

    const updatedState = createWebsite(state);
    if (updatedState === state) return state;

    const websites = [...updatedState.websites];
    const lastIndex = websites.length - 1;

    websites[lastIndex] = {
        ...websites[lastIndex],
        webFiles : {...files}
    };

    return {...updatedState,websites}
}