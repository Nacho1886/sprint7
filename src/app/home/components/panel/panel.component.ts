import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  
  @ViewChild('pagesId') pages!: ElementRef;
  @ViewChild('languagesId') languages!: ElementRef;

  constructor(private budgetCalculateService: BudgetCalculateService ) { }

  @Input('options') myForm!: FormGroup

  

  plus(value: ElementRef): void {
    value.nativeElement.value ++
  }
  minun(value: ElementRef): void {
    value.nativeElement.value --
  }


  isValid(inputName: string) {
    return this.myForm.controls[inputName].errors
  }
}
