export interface Website {
  id: number;
  name: string;
  foundedYear: number;
  monthlyIncome: number;
}

export interface GameState {
  year: number;
  month: number;
  money: number;
  websites: Website[];
}

export const START_YEAR = 1995;
export const END_YEAR = 2026;
export const WEBSITE_COST = 50;

export function initialState(): GameState {

  return { year: START_YEAR, money: 300,month: 1, websites: [] };
}
