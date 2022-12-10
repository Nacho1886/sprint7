import { OnDestroy, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ManipulateBudgetsService } from '../../services/manipulate-budgets.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnDestroy {

  @Input('options') myOptionsForm!: FormGroup
  @Input() optionsDisplay!: boolean

  constructor(private mbs: ManipulateBudgetsService) { }
  

  calculateIncDec(inputName: string, increment: boolean = false): void { 
      let nameControl = this.myOptionsForm.get(inputName)!.value;
      increment ? nameControl++ : nameControl--
      this.myOptionsForm.get(inputName)!.patchValue(nameControl)
  }


  isInvalid(inputName: string) { return this.myOptionsForm.controls[inputName].errors }

  
  ngOnDestroy(): void {
    // this.manipulateBudgetService.resetValueToFalse(this.showOptions, ['webPage', 'seoCampaign', 'adsCampaign'])
    this.mbs.resetValueTo1(this.myOptionsForm, ['pages', 'languages'])
  }
}
