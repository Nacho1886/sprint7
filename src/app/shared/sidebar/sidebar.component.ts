import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/home/interfaces/budget.form';
import { BudgetCalculateService } from '../../home/services/budget-calculate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor( private budgetCalculateService: BudgetCalculateService ) { }
  
  budgetArrayList: Budget[] = this.budgetCalculateService.showBudgetList
  
}
