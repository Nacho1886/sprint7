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
  filteredOptions!: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<SidebarModalComponent>,
    private fb: FormBuilder,
    private budgetCalculateService: BudgetCalculateService,
    private manipulateBudgetsService: ManipulateBudgetsService
  ) {

    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList

    this.options = this.fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)]
    });
  }


  myControl = this.fb.control('');



  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const pepe = this.manipulateBudgetsService.filter(value || '', this.budgetArrayList)
        console.log("🚀 ~ file: sidebar-modal.component.ts:56 ~ SidebarModalComponent ~ ngOnInit ~ value", value)
        console.log("🚀 ~ file: sidebar-modal.component.ts:56 ~ SidebarModalComponent ~ ngOnInit ~ pepe", pepe)
        return this.manipulateBudgetsService.filter(value || '', this.budgetArrayList)}),
    );
  }
}
