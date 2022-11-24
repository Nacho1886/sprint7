import { Component, Input } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  
  constructor(private budgetCalculateService: BudgetCalculateService ) { }

  @Input('options') formPanel: any
}
