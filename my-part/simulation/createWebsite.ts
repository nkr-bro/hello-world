import { WEBSITE_COST, type GameState } from './models/GameState';
import {getEra} from "./getEra";
/** Pure simulation logic; independent of React and Phaser. */

const incomeByEra : Record < string,number >= {
  "Dial-Up": 10,
  "Social Web" : 15,
  "Mobile Era" : 20,
  "Modern Web" : 25,
}
export function createWebsite(state: GameState): GameState {
  if (state.money < WEBSITE_COST) return state;
  const id = state.websites.length + 1;
  return {
    ...state,
    money: state.money - WEBSITE_COST,
    websites: [...state.websites, { id, name: `My website #${id}`, foundedYear: state.year,monthlyIncome : incomeByEra[getEra(state.year)], monthlyCost : 2, },],
  };
}
