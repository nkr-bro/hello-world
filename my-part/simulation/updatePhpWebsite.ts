import type { GameState} from "./models/GameState";
import {isGameFinished} from "./isGameFinished";
import {previewPhp} from "./previewPhp";


export function updatePhpWebsite(
    state: GameState,
    websiteId:number,
    source: string
): GameState{
    if (isGameFinished(state) || previewPhp(source) === null) {
        return state;
    }


    const website = state.websites.find(site => site.id === websiteId);
    if (typeof website?.phpSource !== "string") return state;

    return {
        ...state,
        websites: state.websites.map(site => site.id === websiteId ? {...site, phpSource : source}: site
        ),
    };
}