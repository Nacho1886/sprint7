import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private formBuilder: FormBuilder ) { }
  
  personaje:string = 'personaje';
  
  myForm: FormGroup<any> = this.formBuilder.group({
    webPage: [false, Validators.required],
    seoCampaign: [false, Validators.required],
    adsCampaign: [false, Validators.required],
    pages: [1, Validators.required],
    languages: [1, Validators.required]
  })
  
  // @Input() myFormForChild: FormGroup<any> = this.myForm
  
  
  saveBudget() {

  }
  
  
  ngOnInit(): void {
  }

}
