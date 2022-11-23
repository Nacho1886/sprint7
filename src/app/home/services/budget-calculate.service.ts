import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Budget } from '../interfaces/budget.form';

const budgetList: Budget[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {
  myForm: any
  constructor( ) { }

  
  // get form() { return this.myForm }

  public save() {
    const json: Budget = this.myForm.value
    budgetList.push(json)
  }

  public showBudgetList() { return budgetList }

}
