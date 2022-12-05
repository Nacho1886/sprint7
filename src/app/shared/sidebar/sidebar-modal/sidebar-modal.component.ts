import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';

import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';
import { ManipulateBudgetsService } from '../../../home/services/manipulate-budgets.service';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss']
})
export class SidebarModalComponent implements OnInit {

  budgetArrayList: BudgetClient[]
  manipulateBudgetArrayList!: Observable<BudgetClient[]>

  myControl: FormControl

  filteredOptions!: Observable<string[]>

  constructor(
    public dialogRef: MatDialogRef<SidebarModalComponent>,
    private fb: FormBuilder,
    private budgetCalculateService: BudgetCalculateService,
    private manipulateBudgetsService: ManipulateBudgetsService
  ) {

    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList

    this.myControl = this.fb.control('');

  }

  transformObjectToArray = this.manipulateBudgetsService.transformObjectToArray
  transformToSimpleArray = this.manipulateBudgetsService.transformToSimpleArray
  filterAutocompleteClients = this.manipulateBudgetsService.filterAutocompleteClients
  filterArrayClients = this.manipulateBudgetsService.filterArrayClients


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this.filterAutocompleteClients(value, this.budgetArrayList)
      })
    )
    this.manipulateBudgetArrayList = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this.filterArrayClients(value, this.budgetArrayList)
      })
    )
  }
}
