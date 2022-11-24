import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  
  @ViewChild('pages') pages!: ElementRef;

  constructor(private budgetCalculateService: BudgetCalculateService ) { }

  @Input('options') myForm!: FormGroup

  plus(value: string): void {
    /* let numberForm = Number(value)
    return numberForm ++ */
    this.pages.nativeElement.value ++
    console.log(this.pages.nativeElement.value);
    
  }

  isValidForm() {
    return this.budgetCalculateService.isValid(this.myForm, 'pages') ||
    this.budgetCalculateService.isValid(this.myForm, 'languages')
  } 
}
