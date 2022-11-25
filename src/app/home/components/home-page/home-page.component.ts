import { Component, OnInit } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  numberRegEx = /\-?\d*\.?\d{1,2}/;

  constructor( private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService ) { 
    
  }
  
  myForm: FormGroup = this.fb.group({
    webPage: [false, Validators.required],
    seoCampaign: [false, Validators.required],
    adsCampaign: [false, Validators.required],
    options: this.fb.group({
      pages: [1 as number, [Validators.required, Validators.min(1)] as Validators],
      languages: [1 as number, [Validators.required, Validators.min(1)] as Validators]
    })
  })

  get showOptions() {
    return this.myForm.get('options') as FormGroup
  }
  
  onSubmit(){
    this.budgetCalculateService.saveBudget(this.myForm.value)
  }

  
  ngOnInit(): void {
  }

}
