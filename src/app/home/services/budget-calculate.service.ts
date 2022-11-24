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
  

  isValid(myForm: FormGroup, inputName: string) {
    
    return myForm.controls[inputName].errors
  }

  public get showBudgetList(): Budget[] { return budgetList }


  public saveBudget(form: Budget) {
    budgetList.push(form) 
  }


}
