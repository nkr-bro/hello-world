
import {getMonthlySummary} from "./getMonthlySummary";
import type {GameState} from "./models/GameState";
import{isGameFinished} from "./isGameFinished";

export function nextMonth(state: GameState):
GameState{
    if (isGameFinished(state)){
        return state;
    }
    const isDecember = state.month == 12;
    const {profit} = getMonthlySummary(state);

    return {
        ...state,
        money: state.money +  profit,
        month: isDecember ? 1: state.month + 1,
        year: isDecember ? state.year + 1:
            state.year,
    }
}
