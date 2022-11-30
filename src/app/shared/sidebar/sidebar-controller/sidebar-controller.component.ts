import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';
import { SidebarModalComponent } from '../sidebar-modal/sidebar-modal.component';

@Component({
  selector: 'app-sidebar-controller',
  templateUrl: './sidebar-controller.component.html',
  styleUrls: [
    './sidebar-controller.component.scss',
  '../../../../assets/fonts/style.css'
]
})
export class SidebarControllerComponent {
  dialogConfig = new MatDialogConfig();

  constructor( private dialog: MatDialog, private budgetCalculateService: BudgetCalculateService ) {
    // debugger
    this.dialogConfig = {
      width: '300px',
      height: '100%',
      position: { top: '0', right: '0', bottom: '0' },
      panelClass: 'custom-modalbox'
    }
  }
  openDialog(): void {
  this.dialog.open(SidebarModalComponent, this.dialogConfig)
  }

}
