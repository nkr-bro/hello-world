import {END_YEAR,type GameState} from "./models/GameState";

export function isGameFinished(state: GameState): boolean{
    return state.year >= END_YEAR && state.month === 12;
}