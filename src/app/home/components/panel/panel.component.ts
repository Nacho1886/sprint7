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
    console.log( log1);
    
  }

  plus(inputName: string): void { this.myForm.value[inputName] ++ 
    const nameControl = this.myForm.get('pages');
    nameControl?.valueChanges
    console.log("🚀 ~ file: panel.component.ts ~ line 25 ~ PanelComponent ~ plus ~ nameControl", nameControl?.valueChanges)
}

  minun(inputName: string): void { this.myForm.value[inputName] -- }

  isValid(inputName: string) { return this.myForm.controls[inputName].errors }

}
