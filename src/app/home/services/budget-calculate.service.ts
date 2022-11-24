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


  public saveBudget(form: FormGroup<any>) {
    const jsonBudget: Budget = form.value
    budgetList.push(jsonBudget)
  }


}
