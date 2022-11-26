import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import servicesData from '../../../assets/data/services.json';
import { Budget } from '../interfaces/Budget';

const budgetList: Budget[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {
  private _services = servicesData
  totalPrice: number

  constructor( ) {
    this.totalPrice = 0
  }
  
  public get showBudgetList(): Budget[] { return budgetList }


  public calculateTotalPrice(form: Budget) {
    
    this._services.forEach(({id, price}) => {
      const name = Object.values(id)
      form[name] === true
    })
  }

  public formIsValid(control: AbstractControl) {
    const valid = Object.values(control.value).find(e => e === true)
    return valid || 'Invalid'
  }

  public saveBudget(form: Budget) {
    budgetList.push(form)
  }


}
