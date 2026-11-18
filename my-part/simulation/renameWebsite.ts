import type { GameState} from "./models/GameState";
import {isGameFinished} from "./isGameFinished";

export function renameWebsite(
    state: GameState,
    websiteId:number,
    name : string,
): GameState {
    if (isGameFinished(state)) return state;
    const newName = name.trim().slice(0,40)


    if (!newName || !state.websites.some(site => site.id === websiteId)) {
        return state;
    }


    return {
        ...state,
        websites: state.websites.map(site => site.id === websiteId ? {...site,name: newName}:site
        ),
    };
}