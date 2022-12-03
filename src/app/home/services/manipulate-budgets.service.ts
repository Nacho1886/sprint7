import { Injectable } from '@angular/core';
import { BudgetClient } from '../interfaces/BudgetClient';

@Injectable({
  providedIn: 'root'
})
export class ManipulateBudgetsService {

  constructor() { }

  transformObjectToArray(object: object): any[] {
    const newArray: any[] = []
    for (const value of Object.values(object)) {
      newArray.push(value)
    }
    return newArray
  }

  public filter(value: string, arrayClients: BudgetClient[]): string[] {
    const research: string[] = []
    const filterValue = value.toLowerCase()

    arrayClients.forEach(budget => {
      for (const data of Object.values(budget)) {
        if (typeof data === typeof Object()) {}
        const stringValue = String(budget[data])
        if (stringValue.toLowerCase().includes(filterValue)) research.push(stringValue)
      }
    })
    return research
  }
}
