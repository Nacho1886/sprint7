import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  constructor() { }

  @Input('options') myForm!: FormGroup

  calculateIncDec(inputName: string, increment: boolean = false): void { 
      let nameControl = this.myForm.get(inputName)!.value;
      increment ? nameControl++ : nameControl--
      this.myForm.get(inputName)!.patchValue(nameControl)
  }

  isValid(inputName: string) { return this.myForm.controls[inputName].errors }

}
