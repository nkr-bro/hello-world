import type {GameState} from "./models/GameState";
import {isGameState} from "./isGameState";

const SAVE_KEY = "hello-world-save";

export function saveGame(state: GameState):
boolean{
    try {
        const data = JSON.stringify(state);
        localStorage.setItem(SAVE_KEY,data);
        return true;
    } catch {
        return false;
    }
}

export function loadGame(): GameState | null {
    try {
        const data = localStorage.getItem(SAVE_KEY);

        if (data == null) return null;

        const parsed: unknown = JSON.parse(data);

        return isGameState(parsed) ? parsed : null;
    } catch {
        return null;
    }
}

export function deleteSave(): boolean {
    try {
        localStorage.removeItem(SAVE_KEY);
        return true;

    } catch {
        return false;
    }
}