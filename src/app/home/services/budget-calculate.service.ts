import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/Budget';

const budgetList: Budget[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {

  // private _saved: boolean = false;
  
  constructor( ) { }
  
  public get showBudgetList(): Budget[] { return budgetList }


  public formIsValid(form: Budget): boolean {
    const pepe = Object.values(form).find(e => e === true)
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 19 ~ BudgetCalculateService ~ formIsValid ~ pepe", pepe)
    return pepe
  }

  public saveBudget(form: Budget) {
    budgetList.push(form)
  }


}
