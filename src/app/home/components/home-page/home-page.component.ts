import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BudgetCalculateService } from '../../services/budget-calculate.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  myForm: FormGroup<any> 

  constructor( 
    private formBuilder: FormBuilder,
    private budgetCalculateService: BudgetCalculateService
    ) { 
    this.myForm = this.formBuilder.group({
      webPage: [false as boolean, Validators.required as Validators],
      seoCampaign: [false, Validators.required],
      adsCampaign: [false, Validators.required]
    })
  }
  
  personaje:string = 'personaje';
  

  
  
  saveBudget() {

  }
  
  
  ngOnInit(): void {
  }

}
