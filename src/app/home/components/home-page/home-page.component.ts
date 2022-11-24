import { Component, OnInit } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService ) { 
    
  }
  
  myForm: FormGroup = this.fb.group({
    webPage: [false, Validators.required],
    seoCampaign: [false, Validators.required],
    adsCampaign: [false, Validators.required],
    pages: [1, [Validators.required, Validators.min(1)]],
    languages: [1, [Validators.required, Validators.min(1)]]
  })
  
  onSubmit(){
    this.budgetCalculateService.saveBudget(this.myForm.value)
    console.warn(this.myForm.value);

  }
  
  
  ngOnInit(): void {
  }

}
