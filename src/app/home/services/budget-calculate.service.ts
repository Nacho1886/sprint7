import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/Budget';
import { FormGroup } from '@angular/forms';

const budgetList: Budget[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {

  private _saved: boolean = false;
  
  constructor( ) { }
  
  public get showBudgetList(): Budget[] { return budgetList }


/*   private formIsValid(form: Budget) {
    Object.values()
    
  }
 */
  public saveBudget(form: Budget) {
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 24 ~ BudgetCalculateService ~ saveBudget ~ form", form)
    budgetList.push(form)
  }


}
