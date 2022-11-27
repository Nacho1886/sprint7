import { Component, OnInit } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  myForm: FormGroup
  
  constructor( private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService ) {     
    this.myForm = this.fb.group({
      webPage: [false, Validators.required],
      seoCampaign: [false, Validators.required],
      adsCampaign: [false, Validators.required],
      options: this.fb.group({
        pages: [1, [Validators.required, Validators.min(1), this.budgetCalculateService.pepe]],
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
  
  onChange() {
    this.budgetCalculateService.calculateTotalPrice(this.myForm)
  }
  
  onSubmit() {
    this.budgetCalculateService.saveBudget(this.myForm.value)
  }
  
  
  ngOnInit(): void { }

}
