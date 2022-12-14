export interface Options {
    pages: number, 
    languages: number,

    [key: string]: any
}

export interface Budget { 
    webPage: boolean, 
    seoCampaign: boolean, 
    adsCampaign: boolean, 
    options: Options,
    
    [key: string]: any
}

