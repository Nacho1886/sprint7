import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-names',
  templateUrl: './client-names.component.html',
  styleUrls: ['./client-names.component.scss']
})
export class ClientNamesComponent implements OnInit {

  @Input() change: any;
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = fb.group({
      budgetName: ['', Validators.required],
      clientName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
