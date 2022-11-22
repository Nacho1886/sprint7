import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
      adsCampaign: [false, Validators.required]
    })
  }
  
  personaje:string = 'personaje';
  
  
  public get modifyPages() {
    return this.myForm
  }
  
  
  saveBudget() {

  }
  
  
  ngOnInit(): void {
  }

}
