import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';

@Component({
  selector: 'app-sidebar-controller',
  templateUrl: './sidebar-controller.component.html',
  styleUrls: ['./sidebar-controller.component.scss']
})
export class SidebarControllerComponent {
  budgetArrayList!: BudgetClient[]
  // dialogConfig = new MatDialogConfig();

  constructor( private dialog: MatDialog, private budgetCalculateService: BudgetCalculateService ) {
    // debugger
    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList
  }
  

}
