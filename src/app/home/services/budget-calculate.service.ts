import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/Budget';

const budgetList: Budget[] = []
@Injectable({
  providedIn: 'root'
})
export class BudgetCalculateService {
  
  constructor( ) { }
  
  public get showBudgetList(): Budget[] { return budgetList }


  public saveBudget(form: Budget) { budgetList.push(form) }


}
