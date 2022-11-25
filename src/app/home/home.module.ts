import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './components/panel/panel.component';



@NgModule({
  declarations: [
    HomePageComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
