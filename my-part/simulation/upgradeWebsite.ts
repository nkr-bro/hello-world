import {GameState} from "./models/GameState";

export function upgradeWebsite(
    state : GameState,
    websiteId : number,
): GameState{
    if (state.money < 100 ) return state;

    const website = state.websites.find(
        (site) => site.id == websiteId,);
    if (!website) return state;

    return {
        ...state,
        money : state.money - 100,
        websites: state.websites.map((site) => {
            if (site.id == websiteId ) {
                return {
                    ...site,
                    monthlyIncome: site.monthlyIncome + 10,
                }
            }
            return site;
        }),
    };

}