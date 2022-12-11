import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BudgetClient } from '../interfaces/BudgetClient';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ManipulateBudgetsService {

  constructor() { }

  resetValueToFalse(form: FormGroup ,inputNames: string[]) {
    inputNames.forEach(e => form.get(e)!.patchValue(false))
  }
  resetValueTo1(form: FormGroup ,inputNames: string[]) {
    inputNames.forEach(e => form.get(e)!.patchValue(1))
  }

  public deleteBudge(id: number, originalArray: BudgetClient[], filterArray: Observable<BudgetClient[]>): void { // Para eliminar presupuestos del array, no funcionaba bien al ser observables
    const deleter = (array: BudgetClient[]) => {
      const index = array.findIndex(budget => budget.id === id)
      array.splice(index, 1)
    }
    
    deleter(originalArray)
    /* filterArray.subscribe(budgets => {
      deleter(budgets)
    }).unsubscribe() */

    localStorage.setItem('Presupuesto cliente', JSON.stringify(originalArray))
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
    while (temporalParameter.find(e => typeof e === typeof Object()))
    temporalParameter = this.transformObjectToArray(temporalParameter).flat()

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
    const manipulatedArray = [...arrayClients]
    
    if (value !== '') manipulatedArray.splice(0)
    
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

}
