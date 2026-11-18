import type {GameState} from "./models/GameState";
import {getMonthlySummary} from "./getMonthlySummary";


export function  getMilestones(state: GameState) {
    const {profit} = getMonthlySummary(state);

    return [
        {name : "First Website" , completed : state.websites.length >= 1 },
        {name:  "Website Network",completed : state.websites.length >= 3},
        {name: "Profitable Business", completed: profit >= 50}
    ]
}