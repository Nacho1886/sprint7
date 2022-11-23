import { Component, OnInit } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService ) { }

  myForm: FormGroup<any> = this.fb.group({
    webPage: [false as boolean, Validators.required as Validators],
    seoCampaign: [false as boolean, Validators.required as Validators],
    adsCampaign: [false as boolean, Validators.required as Validators],
    pages: [1 as number, [Validators.required, Validators.min(1)] as Validators],
    languages: [1 as number, [Validators.required, Validators.min(1)] as Validators]
  })

  
  save = this.budgetCalculateService.save
  
  
  
  
  ngOnInit(): void {
    this.budgetCalculateService.myForm = this.myForm
  }

}
