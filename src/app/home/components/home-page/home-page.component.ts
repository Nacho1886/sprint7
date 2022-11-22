import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private formBuilder: FormBuilder ) { }
  
  
  myForm: FormGroup = this.formBuilder.group({
    webPage: [false, Validators.required],
    seoCampaign: [false, Validators.required],
    adsCampaign: [false, Validators.required],
    pages: [1, Validators.required],
    languages: [1, Validators.required]
  })
  
  
  


  ngOnInit(): void {
  }

}
