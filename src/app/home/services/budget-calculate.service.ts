import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import servicesData from '../../../assets/data/servicesWeb.json';
import { Budget } from '../interfaces/Budget';
import { ClientRegistration } from '../interfaces/ClientRegistration';
import { BudgetClient } from '../interfaces/BudgetClient';
import { ServiceWeb } from '../interfaces/ServiceWeb';

const budgetList: BudgetClient[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {

  private _services: ServiceWeb[] = servicesData
  private _totalPrice: number
  private _budget!: Budget
  change: boolean = false


  constructor( ) {
    this._totalPrice = 0
  }
  
  public get showTotalPrice(): number { return this._totalPrice }
  public get showBudgetClientList(): BudgetClient[] { return budgetList }
  public get showServices() { return this._services }
  


  public formIsValid(control: AbstractControl) {
    const valid = Object.values(control.value).find(e => e === true)
    return valid || 'Invalid'
  }
  
  public saveBudget(formJson: Budget) { this._budget = {...formJson} }
  
  public calculateTotalPrice(form: FormGroup, services: ServiceWeb[]): void {
    console.log(services);

    for (const key in this._services) {
      console.log("🚀 ~ file: budget-calculate.service.ts ~ line 41 ~ BudgetCalculateService ~ calculateTotalPrice ~ form.hasOwnProperty.call(this._services, key)", key)
      if (form.hasOwnProperty.call(this._services, key)) {
        console.log("🚀 ~ file: budget-calculate.service.ts ~ line 41 ~ BudgetCalculateService ~ calculateTotalPrice ~ form.hasOwnProperty.call(this._services, key)", form.hasOwnProperty.call(this._services, key))
        const element = this._services[key];
        
      }
    }
/*     this._services.forEach(({id, price}) => {
      if (form.get(id)!.value === true) this._totalPrice += price!
      if (form.get('webPage')!.value === true) {
      }
    }) */
  }

  public saveAllBudgetClient(formJson: ClientRegistration) {
    const completBudget: BudgetClient = {
      clientRegistration: formJson,
      service: this._budget,
      price: this._totalPrice,
      date: new Date()
    }
    budgetList.push({...completBudget})
  }

/*   public pepe(control: AbstractControl) {
    console.log("🚀 ~ file: budget-calculate.service.ts ~ line 37 ~ BudgetCalculateService ~ pepe ~ control", control)
    return 0
  } */
}
