import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';



@NgModule({
  declarations: [
    PanelComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
