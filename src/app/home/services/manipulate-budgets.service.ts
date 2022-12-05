import { Injectable } from '@angular/core';
import { BudgetClient } from '../interfaces/BudgetClient';
import { BudgetCalculateService } from './budget-calculate.service';

@Injectable({
  providedIn: 'root'
})
export class ManipulateBudgetsService {

  manipulatedArray!: BudgetClient[]

  constructor(private budgetCalculateService: BudgetCalculateService) { }

  public deleteBudge(i: number, array: BudgetClient[]): void {
    array.splice(i, 1)
    this.budgetCalculateService.localeStorageSave(array)
  }


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



  public filterAutocompleteClients(value: string, arrayClients: BudgetClient[], manipulatedArray: BudgetClient[], i: number): string[] {
    // console.log(i);
    

    manipulatedArray = []
    const research: string[] = []
    const filterValue = String(value).toLowerCase()
    
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

    console.log("🚀 ~ file: manipulate-budgets.service.ts:69 ~ ManipulateBudgetsService ~ filterAutocompleteClients ~ research", research)
    // console.log("🚀 ~ file: manipulate-budgets.service.ts ~ line 60 ~ ManipulateBudgetsService ~ filterAutocompleteClients ~ manipulatedArray", manipulatedArray)
    return research
  }


  public get showManipulatedArray() { return this.manipulatedArray }

}
