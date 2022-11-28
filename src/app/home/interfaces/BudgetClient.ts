import { Budget } from "./Budget";
import { ClientRegistration } from './ClientRegistration';

export interface BudgetClient {
    clientRegistration: ClientRegistration;
    service: Budget;
    price: number;
    date: Date;
}
