import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/budget.form';
import { FormGroup } from '@angular/forms';

const budgetList: Budget[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {
  
  constructor( ) { }
  
  public get showBudgetList(): Budget[] { return budgetList }

  dataPanel: any


  public saveBudget(form: FormGroup<any>) {
    const jsonBudget: Budget = form.value
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 18 ~ BudgetCalculateService ~ saveBudget ~ jsonBudget", jsonBudget)
    budgetList.push(jsonBudget)
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 26 ~ BudgetCalculateService ~ dataPanel", this.dataPanel)
  }


}
