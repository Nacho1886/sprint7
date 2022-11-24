import { Budget } from "./Budget";

export interface BudgetList {
    name: string;
    client: string;
    service: Budget;
    price: number;
    date: Date;
}
