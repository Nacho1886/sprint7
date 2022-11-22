import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  myForm: FormGroup<any> = this.formBuilder.group({
    pages: [1, [Validators.required, Validators.min(1)]],
    languages: [1, [Validators.required, Validators.min(1)]]
  })

  

  ngOnInit(): void {
  }

}
