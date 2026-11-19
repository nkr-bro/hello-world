import {
    START_YEAR,
    END_YEAR,
    type GameState,
} from "./models/GameState";

export function isGameState(value : unknown):
value is GameState {
    if (typeof value !== "object" || value === null) return false;

    const state = value as Record < string,
    unknown>;

    const year = state.year;

    return(
        typeof year == "number" &&
            Number.isInteger(year) &&
            year >= START_YEAR &&
            year <= END_YEAR &&
            typeof state.month === "number"&&
            Number.isInteger(state.month) &&
            typeof state.money == "number" &&
            state.month >= 1 &&
            state.month <= 12 &&
            Number.isFinite(state.money) &&
            Array.isArray(state.websites) &&
        state.websites.every((site : unknown) => {
            if (typeof site !== "object" || site === null) return false;

            const website = site as Record < string , unknown>;
            if (website.webFiles !== undefined) {
                if (typeof website.webFiles !== "object" || website.webFiles === null) {return false;}


                const files = website.webFiles as Record<string, unknown>


                if (
                    typeof files.html !== "string" ||
                    typeof files.css !== "string" ||
                    typeof files.js !== "string"
                ){return false;

                }


            }


            return (
                typeof website.id === "number" &&
                Number.isInteger(website.id) &&
                website.id > 0 &&
                typeof website.name === "string" &&
                (website.phpSource === undefined || typeof website.phpSource === "string") &&
                typeof website.foundedYear === "number" &&
                Number.isInteger(website.foundedYear) &&
                website.foundedYear >= START_YEAR &&
                website.foundedYear <= year &&
                typeof website.monthlyIncome  === "number" &&
                Number.isFinite(website.monthlyIncome) &&
                website.monthlyIncome >= 0 &&
                typeof website.monthlyCost === "number" &&
                Number.isFinite(website.monthlyCost) &&
                website.monthlyCost >= 0
            );
        })
    );
}