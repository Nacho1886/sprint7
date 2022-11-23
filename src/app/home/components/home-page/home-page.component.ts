import { Component, OnInit } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private budgetCalculateService: BudgetCalculateService ) { }
  
  myForm = this.budgetCalculateService.form
  
  save = this.budgetCalculateService.save

  
  
  ngOnInit(): void {
  }

}
