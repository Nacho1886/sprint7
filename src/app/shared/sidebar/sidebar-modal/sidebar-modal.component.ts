import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss',
  '../../../../assets/fonts/style.css']
})
export class SidebarModalComponent {
  budgetArrayList!: BudgetClient[]

  constructor(public dialogRef: MatDialogRef<SidebarModalComponent>, private budgetCalculateService: BudgetCalculateService) { 
    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList

  }
  
}
