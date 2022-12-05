import { Component, Input, OnInit } from '@angular/core';
import { ManipulateBudgetsService } from '../../../home/services/manipulate-budgets.service';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent {

  // budgetArrayList: BudgetClient[]
  @Input('array') filteredArray!: BudgetClient[]

  constructor(
    // private budgetCalculateService: BudgetCalculateService,
    private manipulateBudgetsService: ManipulateBudgetsService
    ) { 
    // this.budgetArrayList = this.budgetCalculateService.showBudgetClientList
  }

  deleteBudge = this.manipulateBudgetsService.deleteBudge
  onMouseT(){
    console.log(this.filteredArray);
    
  }

}
