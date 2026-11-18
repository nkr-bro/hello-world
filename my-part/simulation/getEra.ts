export function getEra(year : number) : string{
    if (year <= 2003) return 'Dial-Up Era';
    if (year <= 2009) return 'Social Web';
    if (year <= 2019) return 'Mobile Era';
    return "Modern Web";
}