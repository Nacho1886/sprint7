import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarModalComponent } from './sidebar/sidebar-modal/sidebar-modal.component';
import { SidebarControllerComponent } from './sidebar/sidebar-controller/sidebar-controller.component';
import { ListContentComponent } from './sidebar/list-content/list-content.component';



@NgModule({
  declarations: [
    SidebarControllerComponent, 
    SidebarModalComponent, 
    ListContentComponent
  ],
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
