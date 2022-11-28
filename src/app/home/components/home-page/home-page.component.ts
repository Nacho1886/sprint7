import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  myForm!: FormGroup
  change: boolean

  constructor( private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService ) {
    this.initForm()
    this.change = false
  }
  total: number = this.budgetCalculateService.showTotalPrice
  
  initForm() {
    this.myForm = this.fb.group({
      webPage: [false, Validators.required],
      seoCampaign: [false, Validators.required],
      adsCampaign: [false, Validators.required],
      options: this.fb.group({
        pages: [1, [Validators.required, Validators.min(1)]],
        languages: [1, [Validators.required, Validators.min(1)]]
      })
    }, { validator: [this.budgetCalculateService.formIsValid] } as AbstractControlOptions
    )
  }
  
  
  get optionsDisplay(): boolean {
    return this.myForm.get('webPage')!.value
  }

  get showform(): FormGroup {
    return this.myForm as FormGroup
  }
  get showOptions(): FormGroup {
    return this.myForm.get('options') as FormGroup
  }

  // public get saved(): boolean {  return this.saved }
  // public change(save: boolean): void { save = !save }
  // public change(): void { this.saved = !this.saved }
  
  onSubmit() {
    this.budgetCalculateService.saveBudget(this.myForm.value)
    this.budgetCalculateService.change = !this.budgetCalculateService.change
    this.initForm()
  }
  
  
  ngOnInit(): void {
  }

}
