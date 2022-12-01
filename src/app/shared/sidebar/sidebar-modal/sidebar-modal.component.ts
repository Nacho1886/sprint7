import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss',
  '../../../../assets/fonts/style.css']
})
export class SidebarModalComponent {
  budgetArrayList!: BudgetClient[]
  options: FormGroup

  constructor(
    public dialogRef: MatDialogRef<SidebarModalComponent>, 
    private fb: FormBuilder, 
    private budgetCalculateService: BudgetCalculateService
    ) { 

    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList
    
    this.options = this.fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)]
    });

  }
  
}
