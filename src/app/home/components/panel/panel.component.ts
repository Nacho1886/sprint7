import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetCalculateService } from '../../services/budget-calculate.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  
  constructor( private fb: FormBuilder, private budgetCalculateService: BudgetCalculateService ) { }

  myForm: FormGroup<any> = this.fb.group({
    pages: [1 as number, [Validators.required, Validators.min(1)] as Validators],
    languages: [1 as number, [Validators.required, Validators.min(1)] as Validators]
  })

/*   public saveDataPanel() {
} */
ngOnInit(): void {
    this.budgetCalculateService.dataPanel = this.myForm
  }
}
