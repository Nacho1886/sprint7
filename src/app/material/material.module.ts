import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  exports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
