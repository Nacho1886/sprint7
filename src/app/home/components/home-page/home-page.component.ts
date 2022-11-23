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
  
  myForm: FormGroup<any> = this.fb.group({
    webPage: [false as boolean, Validators.required as Validators],
    seoCampaign: [false as boolean, Validators.required as Validators],
    adsCampaign: [false as boolean, Validators.required as Validators]
  })
  
  
  save = this.budgetCalculateService.saveBudget
  
  
  
  
  ngOnInit(): void {
    // this.budgetCalculateService.sendMyForm(this.myForm)
  }

}
