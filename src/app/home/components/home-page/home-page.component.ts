import { Component, OnInit } from '@angular/core';
import { BudgetCalculateService } from '../../services/budget-calculate.service';
import { FormBuilder, Validators, FormGroup, AbstractControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlValues } from '../../interfaces/UrlValues';
import { ManipulateBudgetsService } from '../../services/manipulate-budgets.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  myForm!: FormGroup
  private _change: boolean

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private budgetCalculateService: BudgetCalculateService,
    private manipulateBudgetService: ManipulateBudgetsService
  ) {
    this.initForm(this.router.getCurrentNavigation()!.extractedUrl.queryParams as UrlValues)
    this._change = false

    this.router.navigate(['/home'], {queryParams: this.router.getCurrentNavigation()!.initialUrl.queryParams} )
  }

  initForm(values?: UrlValues) {
    this.myForm = this.fb.group({
      webPage: [this.budgetCalculateService.validateStringToBoolean(String(values?.webPage)) ?? false, Validators.required],
      options: this.fb.group({
        pages: [this.budgetCalculateService.validateStringToNumber(Number(values?.pages)) ?? 1, [Validators.required, Validators.min(1)]],
        languages: [this.budgetCalculateService.validateStringToNumber(Number(values?.languages)) ?? 1, [Validators.required, Validators.min(1)]]
      }),
      seoCampaign: [this.budgetCalculateService.validateStringToBoolean(String(values?.seoCampaign)) ?? false, Validators.required],
      adsCampaign: [this.budgetCalculateService.validateStringToBoolean(String(values?.adsCampaign)) ?? false, Validators.required]
    }, { validator: [this.budgetCalculateService.formIsValid] } as AbstractControlOptions
    )

    this.myForm.valueChanges.subscribe(value=> {
      const { webPage, options, seoCampaign, adsCampaign } = value
      const { pages, languages } = options
      const url: UrlValues = { webPage, seoCampaign, adsCampaign, pages, languages }

      if (this._change) this.router.navigate(['/home'])
      if (!this._change) this.router.navigate(['/home'], {queryParams: url})
    })
  }


  get optionsDisplay(): boolean { return this.myForm.get('webPage')!.value }
  get showChange(): boolean { return this._change }

  get showform(): FormGroup { return this.myForm as FormGroup }
  get showOptions(): FormGroup { return this.myForm.get('options') as FormGroup }

  onSubmit() {
    this.budgetCalculateService.saveBudget(this.myForm.value)
    this.onChange(this._change)
    this.initForm()
    this.resetValueToFalse(this.myForm, ['webPage', 'seoCampaign', 'adsCampaign'])
  }

  calculateTotalPrice = this.budgetCalculateService.calculateTotalPrice
  showServices = this.budgetCalculateService.showServices
  resetValueToFalse = this.manipulateBudgetService.resetValueToFalse

  onChange(change: boolean): void { this._change = !change }

  showHelp(value: string) { return value }

  goBack() {
    this.router.ngOnDestroy()
  }


  ngOnInit(): void {
    if (!this.optionsDisplay) this.manipulateBudgetService.resetValueTo1(this.showOptions, ['pages', 'languages'])
  }
}
