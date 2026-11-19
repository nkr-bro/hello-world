import {isGameFinished} from "./isGameFinished";
import type {GameState, WebFiles} from "./models/GameState"

export function updateWebWebsite(
    state: GameState,
    websiteId: number,
    files: WebFiles
): GameState {
    if (isGameFinished(state) || !files.html.trim()) return state;

    const website = state.websites.find(site => site.id === websiteId);
    if (!website?.webFiles) return state;


    return {
        ...state,
        websites: state.websites.map(site =>
        site.id === websiteId ?{
            ...site,webFiles: {...files}}
            :site
        )
    }
}