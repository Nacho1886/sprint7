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
    pages: [1, [Validators.required, Validators.min(1)]],
    languages: [1, [Validators.required, Validators.min(1)]]
  })
  
  onSubmit(){
    this.budgetCalculateService.saveBudget(this.myForm.value)
  }

  /* shareUrl(event: Event){
    event.isTrusted
  } */
  
  
  ngOnInit(): void {
  }

}
