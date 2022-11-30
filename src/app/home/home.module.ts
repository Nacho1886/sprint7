import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './components/panel/panel.component';
import { ClientNamesComponent } from './components/client-names/client-names.component';
import { HelpModalComponent, ModalDialog } from './components/help-modal/help-modal.component';



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
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
