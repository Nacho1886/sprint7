export interface Options {
    "pages": number, 
    "languages": number
}

export interface Budget { 
    "webPage": boolean, 
    "seoCampaign": boolean, 
    "adsCampaign": boolean, 
    options: Options
}
