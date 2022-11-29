import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import servicesData from '../../../assets/data/servicesWeb.json';
import { Budget } from '../interfaces/Budget';
import { ClientRegistration } from '../interfaces/ClientRegistration';
import { BudgetClient } from '../interfaces/BudgetClient';
import { ServiceWeb } from '../interfaces/ServiceWeb';

@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {
  private _budgetList: BudgetClient[]

  private _services: ServiceWeb[] = servicesData
  private _budget!: Budget
  change: boolean = false


  constructor() {
    this._budgetList = JSON.parse(localStorage.getItem('Presupuesto cliente')!) ?? []
  }

  public get showBudgetClientList(): BudgetClient[] { return this._budgetList }
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
        services.forEach(({ id, price, options }) => {
          if (id === key) {
            total += price
            if (options) options.forEach(e => total += e.price * formJson.options[e.id])
          }
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
      date: new Date().toLocaleDateString()
    }
    
    this._budgetList.push({ ...completBudget })
    localStorage.setItem('Presupuesto cliente', JSON.stringify(this._budgetList))

  }

}
