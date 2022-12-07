import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { Observable } from 'rxjs';
import { ManipulateBudgetsService } from '../../../home/services/manipulate-budgets.service';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent {

  // budgetClientList: BudgetClient[]
  @Input('array') filteredArray!: Observable<BudgetClient[]>
  @Input() orderBy!: string[]

  constructor(
    private manipulateBudgetsService: ManipulateBudgetsService,
    // private bcs:BudgetCalculateService
    ) {
    // this.budgetClientList = this.bcs.showBudgetClientList
  }
  
  
  deleteBudge = this.manipulateBudgetsService.deleteBudge
  
}
