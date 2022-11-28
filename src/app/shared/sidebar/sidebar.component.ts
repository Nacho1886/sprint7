import { Component } from '@angular/core';
import { BudgetCalculateService } from '../../home/services/budget-calculate.service';
import { BudgetClient } from '../../home/interfaces/BudgetClient';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor( private budgetCalculateService: BudgetCalculateService ) { }
  
  budgetArrayList: BudgetClient[] = this.budgetCalculateService.showBudgetClientList

}
