import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import servicesData from '../../../assets/data/servicesWeb.json';
import { Budget } from '../interfaces/Budget';
import { ClientRegistration } from '../interfaces/ClientRegistration';
import { BudgetClient } from '../interfaces/BudgetClient';
import { ServiceWeb } from '../interfaces/ServiceWeb';

/* interface IStringIndex {
  propertyA: string;
  propertyB: string;
  [key: string]: any;
} */

const budgetList: BudgetClient[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {

  private _services: ServiceWeb[] = servicesData
  // private _totalPrice: number
  private _budget!: Budget
  change: boolean = false


  constructor() {
    // this._totalPrice = 0
  }

  // public get showTotalPrice(): number { return this._totalPrice }
  public get showBudgetClientList(): BudgetClient[] { return budgetList }
  public get showBudget(): Budget { return this._budget }
  public get showServices() { return this._services }


  public formIsValid(control: AbstractControl) {
    const valid = Object.values(control.value).find(e => e === true)
    return valid || 'Invalid'
  }

  public saveBudget(formJson: Budget) { this._budget = { ...formJson } }

  public calculateTotalPrice(formJson: Budget, services: ServiceWeb[]): number {
    let total: number = 0
    for (const key in formJson) {
      const element = formJson[key];
      if (element) {
        services.forEach(({ id, price }) => {
          if (id === key) total += price
        })
      }
    }
    return total
  }
  

  public saveAllBudgetClient(formJson: ClientRegistration) {
    const completBudget: BudgetClient = {
      clientRegistration: formJson,
      service: this._budget,
      price: this.calculateTotalPrice(this.showBudget, this.showServices),
      date: new Date()
    }
    budgetList.push({ ...completBudget })
  }

}
