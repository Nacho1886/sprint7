export interface Options {
    "id": string[],
    "price": number
}
export interface ServiceWeb {
    "id": string,
    "price": number,
    "options"?: Options
}