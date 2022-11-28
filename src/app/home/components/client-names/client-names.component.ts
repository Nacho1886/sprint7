import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BudgetCalculateService } from '../../services/budget-calculate.service';

@Component({
  selector: 'app-client-names',
  templateUrl: './client-names.component.html',
  styleUrls: ['./client-names.component.scss']
})
export class ClientNamesComponent implements OnInit {

  @Input() change: any;
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private BudgetCalculateService: BudgetCalculateService) {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      client: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmitClient() {
    this.BudgetCalculateService.saveAllBudgetClient(this.clientForm.value)
  }

  ngOnInit(): void {
  }

}
