import { Component, OnInit } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

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
        pages: [1, [Validators.required, Validators.min(1)]],
        languages: [1, [Validators.required, Validators.min(1)]]
      })
    }, { validator: this.formIsValid }
    )
  }
  
  formIsValid = this.budgetCalculateService.formIsValid(this.showForm.value)

  get showForm() {
    return this.myForm as FormGroup
  }
  get showOptions() {
    return this.myForm.get('options') as FormGroup
  }
  
  onSubmit(){
    this.budgetCalculateService.saveBudget(this.myForm.value)
  }

  
  ngOnInit(): void {
    // this.myForm.addControl('formIsValid', new FormControl(this.budgetCalculateService.formIsValid(this.showForm.value), Validators.requiredTrue))

  }

}
