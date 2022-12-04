import { Injectable } from '@angular/core';
import { BudgetClient } from '../interfaces/BudgetClient';
import { BudgetCalculateService } from './budget-calculate.service';

@Injectable({
  providedIn: 'root'
})
export class ManipulateBudgetsService {
  private _manipulatedArray: BudgetClient[] = []

  constructor( private budgetCalculateService: BudgetCalculateService ) { }

  public deleteBudge(i: number, array: BudgetClient[]) {
    array.splice(i, 1)
    this.budgetCalculateService.localeStorageSave(array)
  }

  public transformObjectToArray(object: object): any[] {
    const newArray: any[] = []
    for (let value of Object.values(object)) {
      if (typeof value === typeof Object()) {
        value = Object.values(value)
      }
      newArray.push(value)
    }
    return newArray
  }

  public transformToSimpleArray(value: object): any[] {
    let temporalParameter: any[] = Object.values(value)
    while (temporalParameter.find(e => typeof e === typeof Object())) {
      temporalParameter = this.transformObjectToArray(temporalParameter).flat()
    }
    return temporalParameter
  }

  public filterAutocompleteClients(value: string, arrayClients: BudgetClient[]): string[] {
    this._manipulatedArray = []
    const research: string[] = []
    const filterValue = String(value).toLowerCase()
    
    if (value === '') this._manipulatedArray = this.budgetCalculateService.showBudgetClientList
    
    arrayClients.forEach(budget => {
      const fullArray = this.transformToSimpleArray({...budget})
      fullArray.forEach(e => {
        if (typeof e === typeof Boolean()) return
        if (String(e).toLowerCase().includes(filterValue)) {
          
          if (!research.includes(e)) research.push(e)
          
          if (!this._manipulatedArray.includes(budget)) 
          this._manipulatedArray.push(budget)
        }
      })
    })
    return research
  }


  public get showManipulatedArray() { return this._manipulatedArray }

}
