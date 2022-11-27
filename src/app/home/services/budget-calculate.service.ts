import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import servicesData from '../../../assets/data/services.json';
import { Budget } from '../interfaces/Budget';

const budgetList: Budget[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {

  private _services = servicesData
  private _totalPrice: number

  constructor( ) {
    this._totalPrice = 0
  }
  
  public get showBudgetList(): Budget[] { return budgetList }
  
  
  public calculateTotalPrice(form: FormGroup): void {
    this._services.forEach(({id, price}) => {
      // const name = Object.values(id)
      if (form.get(id)!.value === true) this._totalPrice += price!
      if (form.get('webPage')!.value === true) {
        // form.get('options')
      }
    })
  }

/*   public pepe(control: AbstractControl) {
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 37 ~ BudgetCalculateService ~ pepe ~ control", control)
    return 0
  } */

  public formIsValid(control: AbstractControl) {
    const valid = Object.values(control.value).find(e => e === true)
    return valid || 'Invalid'
  }

  public saveBudget(formJson: Budget) {
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 44 ~ BudgetCalculateService ~ saveBudget ~ formJson", formJson)
    budgetList.push({...formJson})
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 46 ~ BudgetCalculateService ~ saveBudget ~ budgetList", budgetList)
  }


}
