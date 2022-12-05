import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, observable, Observable, startWith } from 'rxjs';

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
  manipulateBudgetArrayList: BudgetClient[]

  myControl: FormControl

  filteredOptions!: Observable<string[]>

  constructor(
    public dialogRef: MatDialogRef<SidebarModalComponent>,
    private fb: FormBuilder,
    private budgetCalculateService: BudgetCalculateService,
    private manipulateBudgetsService: ManipulateBudgetsService
  ) {

    this.budgetArrayList = this.budgetCalculateService.showBudgetClientList
    this.manipulateBudgetArrayList = this.budgetCalculateService.showBudgetClientList

    this.myControl = this.fb.control('');

  }

  filterAutocompleteClients = this.manipulateBudgetsService.filterAutocompleteClients

  onMouseT(){
    console.log(this.manipulateBudgetArrayList);
    
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value, i) => {
        // console.log("🚀 ~ file: sidebar-modal.component.ts ~ line 50 ~ SidebarModalComponent ~ ngOnInit ~ this.manipulateBudgetArrayList", this.manipulateBudgetArrayList)
    return this.filterAutocompleteClients(value, this.budgetArrayList, i)}),
    )
    // .subscribe(observer => console.log(observer))
    this.myControl.valueChanges.subscribe(observer => console.log(observer))
  }
}
