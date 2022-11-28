import { Component } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  myForm!: FormGroup
  private _change: boolean

  constructor( private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService ) {
    this.initForm()
    this._change = false
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
  
  
  get optionsDisplay(): boolean { return this.myForm.get('webPage')!.value }
  get showChange(): boolean { return this._change }

  get showform(): FormGroup { return this.myForm as FormGroup }
  get showOptions(): FormGroup { return this.myForm.get('options') as FormGroup }
  
  onSubmit() {
    this.budgetCalculateService.saveBudget(this.myForm.value)
    this.onChange(this._change)
    this.initForm()
  }

  calculateTotalPrice = this.budgetCalculateService.calculateTotalPrice
  showServices = this.budgetCalculateService.showServices

  onChange(change: boolean): void { this._change = !change }
}
