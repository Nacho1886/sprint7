import { Budget } from "./Budget";
import { ClientRegistration } from './ClientRegistration';

export interface BudgetClient {
    id: number,
    clientRegistration: ClientRegistration,
    service: Budget,
    price: number,
    date: string,

    [key: string]: any
}
