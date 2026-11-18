import { WEBSITE_COST, type GameState } from './models/GameState';

/** Pure simulation logic; independent of React and Phaser. */
export function createWebsite(state: GameState): GameState {
  if (state.money < WEBSITE_COST) return state;
  const id = state.websites.length + 1;
  return {
    ...state,
    money: state.money - WEBSITE_COST,
    websites: [...state.websites, { id, name: `My website #${id}`, foundedYear: state.year,monthlyIncome : 10, }],
  };
}
