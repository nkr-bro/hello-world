import type {GameState} from "./models/GameState"
import {isGameFinished} from "./isGameFinished"
import {getMilestones} from "./getMilestones";


export function getFinalReport(state: GameState) {
    if (!isGameFinished(state)) return null;

    const milestones = getMilestones(state);


    return{
        balance : state.money,
        websiteCount : state.websites.length,
        completedMIlesrones: milestones.filter(goal => goal.completed).length,
        totalMilestones : milestones.length,
    };
}