import type {GameState} from "./models/GameState";
import {canUsePhp} from "./canUsePhp";
import {previewPhp} from "./previewPhp";
import {createWebsite} from "./createWebsite";

export function publishPhpWebsite(
    state: GameState,
    source: string,
):  GameState {
    if (!canUsePhp(state.year) || previewPhp(source) === null){
        return state;
    }

    const updatedState = createWebsite(state);
    if (updatedState === state) return state;

    const websites = [...updatedState.websites];
    const lastIndex = websites.length - 1;
    websites[lastIndex] = {...websites[lastIndex],phpSource: source};

    return {... updatedState , websites};
}