import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  
  @ViewChild('pagesId') pages!: ElementRef;
  @ViewChild('languagesId') languages!: ElementRef;

  constructor() { }

  @Input('options') myForm!: FormGroup

  log1(log1: any){
    console.log(typeof log1);
    
  }

  plus(inputName: string): void { this.myForm.value[inputName] ++ 
  this.inputName.nativeElement.value ++}

  minun(inputName: string): void { this.myForm.value[inputName] -- }

  isValid(inputName: string) { return this.myForm.controls[inputName].errors }

}
