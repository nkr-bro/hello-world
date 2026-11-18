import {END_YEAR,type GameState} from "./models/GameState";
import {getMonthlySummary} from "./getMonthlySummary";

export function nextMonth(state: GameState):
GameState{
    if (state.year >= END_YEAR && state.month == 12){
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
