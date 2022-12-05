import { Component, Input } from '@angular/core';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent {

  budgetArrayList: BudgetClient[]
  @Input('array') filteredArray!: Observable<BudgetClient[]>

  constructor(
    private budgetCalculateService: BudgetCalculateService
    ) { 
    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList
  }

  // deleteBudge = this.manipulateBudgetsService.deleteBudge

}
