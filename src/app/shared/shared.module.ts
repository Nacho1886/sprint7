import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarModalComponent } from './sidebar/sidebar-modal/sidebar-modal.component';
import { SidebarControllerComponent } from './sidebar/sidebar-controller/sidebar-controller.component';



@NgModule({
  declarations: [SidebarControllerComponent, SidebarModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarControllerComponent
  ]
})
export class SharedModule { }
