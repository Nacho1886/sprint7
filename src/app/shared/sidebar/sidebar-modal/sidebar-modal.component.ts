import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';

import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';
import { ManipulateBudgetsService } from '../../../home/services/manipulate-budgets.service';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss']
})
export class SidebarModalComponent implements OnInit {
  budgetArrayList!: BudgetClient[]
  options: FormGroup
  manipulateBudgetArrayList!: BudgetClient[]
  // manipulateBudgetArrayList!: Observable<BudgetClient[]>
  filteredOptions!: Observable<string[]>

  constructor(
    public dialogRef: MatDialogRef<SidebarModalComponent>,
    private fb: FormBuilder,
    private budgetCalculateService: BudgetCalculateService,
    private manipulateBudgetsService: ManipulateBudgetsService
  ) {

    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList
    this.manipulateBudgetArrayList = this.manipulateBudgetsService.showManipulatedArray

    this.options = this.fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)]
    });
  }


  myControl = this.fb.control('');



  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(),
      map(value => {
    console.log(this.manipulateBudgetArrayList);
        
    this.manipulateBudgetArrayList = this.manipulateBudgetsService.showManipulatedArray
    return this.manipulateBudgetsService.filterAutocompleteClients(value || '', this.budgetArrayList)}),
    )
  }
}
