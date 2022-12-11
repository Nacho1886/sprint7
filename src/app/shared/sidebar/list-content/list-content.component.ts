import { Component, Input } from '@angular/core';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { Observable } from 'rxjs';
import { ManipulateBudgetsService } from '../../../home/services/manipulate-budgets.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent {

  @Input('array') filteredArray!: Observable<BudgetClient[]>
  @Input() orderBy!: string[]

  constructor(private manipulateBudgetsService: ManipulateBudgetsService) { }
  
  
  deleteBudge = this.manipulateBudgetsService.deleteBudge
  
}
