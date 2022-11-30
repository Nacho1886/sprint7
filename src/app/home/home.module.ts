import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './components/panel/panel.component';
import { ClientNamesComponent } from './components/client-names/client-names.component';
import { HelpModalComponent, ModalDialog } from './components/help-modal/help-modal.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomePageComponent,
    PanelComponent,
    ClientNamesComponent,
    HelpModalComponent,
    ModalDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
