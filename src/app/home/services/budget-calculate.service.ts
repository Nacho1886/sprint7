import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Budget } from '../interfaces/budget.form';

@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {
  budgetList: Budget[] = []

  
  constructor( private fb: FormBuilder ) { }

  myForm: FormGroup<any> = this.fb.group({
    webPage: [false as boolean, Validators.required as Validators],
    seoCampaign: [false as boolean, Validators.required as Validators],
    adsCampaign: [false as boolean, Validators.required as Validators],
    pages: [1 as number, [Validators.required, Validators.min(1)] as Validators],
    languages: [1 as number, [Validators.required, Validators.min(1)] as Validators]
  })
  
  get form() { return this.myForm }

  public save() {
    const form: Budget = this.myForm.value
    // this.budgetList.push(form)
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 27 ~ BudgetCalculateService ~ save ~ budgetList", typeof this.budgetList)
  }

/*   public showBudgetList() {
    return [...this.budgetList]
  } */

}
