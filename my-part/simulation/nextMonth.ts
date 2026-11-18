import {END_YEAR,type GameState} from "./models/GameState";


export function nextMonth(state: GameState):
GameState{
    if (state.year >= END_YEAR && state.month == 12){
        return state;
    }
    const isDecember = state.month == 12;
    const income = state.websites.reduce((total, website) => total + website.monthlyIncome, 0);

    return {
        ...state,
        money: state.money + income,
        month: isDecember ? 1: state.month + 1,
        year: isDecember ? state.year + 1:
            state.year,
    }
}
