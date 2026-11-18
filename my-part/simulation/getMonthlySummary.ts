import type {GameState} from "./models/GameState";


export function getMonthlySummary(state: GameState) {
    const income = state.websites.reduce(
        (total , website) => total + website.monthlyIncome,
        0,
    );


    const expenses = state.websites.reduce(
        (total,website) => total + website.monthlyCost,
        0,
    );


    return {
        income,
        expenses,
        profit : income-expenses,
    }
}