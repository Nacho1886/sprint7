import { Injectable } from '@angular/core';
import { BudgetClient } from '../interfaces/BudgetClient';

@Injectable({
  providedIn: 'root'
})
export class ManipulateBudgetsService {

  constructor() { }

  transformObjectToArray(object: object): any[] {
    const newArray: any[] = []
    for (let value of Object.values(object)) {
      if (typeof value === typeof Object()) {
        value = Object.values(value)
      }
      newArray.push(value)
    }
    return newArray
  }

  transformToSimpleArray(value: object): any[] {
    let temporalParameter: any[] = Object.values(value)
    while (temporalParameter.find(e => typeof e === typeof Object())) {
      temporalParameter = this.transformObjectToArray(temporalParameter).flat()
    }
    return temporalParameter
  }

  public filterAutocompleteClients(value: string, arrayClients: BudgetClient[]): string[] {
    const research: string[] = []
    const filterValue = value.toLowerCase()

    arrayClients.forEach(budget => {
      const fullArray = this.transformToSimpleArray({...budget})
      fullArray.forEach(e => {
        if (typeof e === typeof Boolean()) return
        if (String(e).toLowerCase().includes(filterValue)) {
          if (!research.includes(e)) research.push(e)
        }
      })
    })
    return research
  }
}
