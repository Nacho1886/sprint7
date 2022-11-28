import { OnDestroy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnDestroy {

  @Input('options') myOptionsForm!: FormGroup

  constructor() { }
  

  calculateIncDec(inputName: string, increment: boolean = false): void { 
      let nameControl = this.myOptionsForm.get(inputName)!.value;
      increment ? nameControl++ : nameControl--
      this.myOptionsForm.get(inputName)!.patchValue(nameControl)
  }


  isInvalid(inputName: string) { return this.myOptionsForm.controls[inputName].errors }


  resetValues(inputName: string) {
    this.myOptionsForm.get(inputName)!.patchValue(1)
  }

  
  ngOnDestroy(): void {
    this.resetValues('pages')
    this.resetValues('languages')
  }
}
