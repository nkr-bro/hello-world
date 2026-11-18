import type {GameState} from "./models/GameState";
import {isGameFinished} from "./isGameFinished";

export function closeWebsite(state: GameState,websiteId : number): GameState {
    if (isGameFinished(state)) return state;
    const websites = state.websites.filter((site) => site.id !== websiteId);

    if (websites.length === state.websites.length) return state;

    return {...state,websites};
}