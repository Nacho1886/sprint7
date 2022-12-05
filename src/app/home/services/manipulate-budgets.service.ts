import { Injectable } from '@angular/core';
import { BudgetClient } from '../interfaces/BudgetClient';
import { BudgetCalculateService } from './budget-calculate.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManipulateBudgetsService {

  constructor(private budgetCalculateService: BudgetCalculateService) { }

/*   public deleteBudge(i: number, origionalArray: BudgetClient[], filterArray: Observable<BudgetClient[]>): void {
    filterArray.subscribe((budgets: BudgetClient[]) => {
        const index = origionalArray.findIndex(budget => budget === budgets[i])
        originalArray.splice(index, 1)
        localStorage.setItem('Presupuesto cliente', JSON.stringify(originalArray))
      }).unsubscribe()
  } */


  public transformObjectToArray(object: object): any[] {
    const newArray: any[] = []
    for (let val of Object.values(object)) {
      if (typeof val === typeof Object()) {
        val = Object.values(val)
      }
      newArray.push(val)
    }
    return newArray
  }


  public transformToSimpleArray(objectWithManyLayers: object): any[] {
    let temporalParameter: any[] = Object.values(objectWithManyLayers)
    while (temporalParameter.find(e => typeof e === typeof Object())) {
      temporalParameter = this.transformObjectToArray(temporalParameter).flat()
    }
    return temporalParameter
  }


  public filterAutocompleteClients(value: string, arrayClients: BudgetClient[]): string[] {
    
    const research: string[] = []
    const filterValue = String(value).toLowerCase()
    
    arrayClients.forEach(budget => {
      const fullArray = this.transformToSimpleArray(budget)
      fullArray.forEach(e => {
        if (typeof e === typeof Boolean()) return
        if (String(e).toLowerCase().includes(filterValue)) {
          
          if (!research.includes(e)) research.push(e)
        }
      })
    })
    return research
  }

  public filterArrayClients(value: string, arrayClients: BudgetClient[]): BudgetClient[] {
    
    const research: string[] = []
    const filterValue = String(value).toLowerCase()
    let manipulatedArray: BudgetClient[] = []
    
    if (value === '') manipulatedArray = arrayClients
    
    arrayClients.forEach(budget => {
      const fullArray = this.transformToSimpleArray({ ...budget })
      fullArray.forEach(e => {
        if (typeof e === typeof Boolean()) return
        if (String(e).toLowerCase().includes(filterValue)) {
          
          if (!research.includes(e)) research.push(e)
          
          if (!manipulatedArray.includes(budget))
          manipulatedArray.push(budget)
        }
      })
    })
    return manipulatedArray
  }


  // public get showManipulatedArray() { return this.manipulatedArray }

}
