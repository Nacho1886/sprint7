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


  constructor() {
    this._budgetList = JSON.parse(localStorage.getItem('Presupuesto cliente')!) ?? []
  }

  public get showBudgetClientList(): BudgetClient[] { return this._budgetList }
  public get showBudget(): Budget { return this._budget }
  public get showServices() { return this._services }

  public validateStringToBoolean(value: string): boolean {
    if (value === 'true') return true
    return false
  }
  public validateStringToNumber(value: number): number | null { 
    if (isNaN(value)) return null
    return value
  }


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
            if (options) {
              let totalPriceOptions: number = options.price
              options.id.forEach(e => totalPriceOptions = totalPriceOptions * formJson.options[e])
              total += totalPriceOptions
            }
          }
        })
      }
    }
    return total
  }
  
  private _calculateId(ID: number): number {
    let newId = ID
    while (this.showBudgetClientList.find(e => e.id === newId)) newId++
    return newId
  }

  public saveAllBudgetClient(formJson: ClientRegistration) {
    const completBudget: BudgetClient = {
      id: this._calculateId(this.showBudgetClientList.length),
      clientRegistration: formJson,
      service: this._budget,
      price: this.calculateTotalPrice(this.showBudget, this.showServices),
      date: new Date().toLocaleString()
    }
    
    this._budgetList.push({ ...completBudget })

    localStorage.setItem('Presupuesto cliente', JSON.stringify(this._budgetList))
  }
}
