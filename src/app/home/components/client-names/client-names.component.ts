import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BudgetCalculateService } from '../../services/budget-calculate.service';

@Component({
  selector: 'app-client-names',
  templateUrl: './client-names.component.html',
  styleUrls: ['./client-names.component.scss']
})
export class ClientNamesComponent implements OnInit {

  @Input() change!: boolean;
  @Output() backChange: EventEmitter<boolean> = new EventEmitter();

  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService) {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      client: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmitClient() {
    this.budgetCalculateService.saveAllBudgetClient(this.clientForm.value)
    this.backChange.emit(this.change);
  }

  ngOnInit(): void {
  }

}
