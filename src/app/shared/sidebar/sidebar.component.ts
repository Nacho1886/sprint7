import { Component } from '@angular/core';
import { BudgetCalculateService } from '../../home/services/budget-calculate.service';
import { BudgetClient } from '../../home/interfaces/BudgetClient';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // budgetClient: BudgetClient
  // budgetArrayList: BudgetClient[] = this.budgetCalculateService.showBudgetClientList
  budgetArrayList!: BudgetClient[]
  
  constructor( private budgetCalculateService: BudgetCalculateService ) { 
    // this.budgetClient = JSON.parse(localStorage.getItem('Presupuesto cliente')!)
    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList
  }
  

}
