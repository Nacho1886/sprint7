import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Budget } from '../../interfaces/budget.form';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  myForm: FormGroup<any> 

  constructor( private formBuilder: FormBuilder ) { 
    this.myForm = this.formBuilder.group({
      webPage: [false as boolean, Validators.required as Validators],
      seoCampaign: [false, Validators.required],
      adsCampaign: [false, Validators.required],
      pages: [1, Validators.required],
      languages: [1, Validators.required]
    })
  }
  
  personaje:string = 'personaje';
  
  
  // @Input() myFormForChild: FormGroup<any> = this.myForm
  
  
  saveBudget() {

  }
  
  
  ngOnInit(): void {
  }

}
