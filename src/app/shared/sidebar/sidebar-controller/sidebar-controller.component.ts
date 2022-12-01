import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SidebarModalComponent } from '../sidebar-modal/sidebar-modal.component';
import { BudgetCalculateService } from '../../../home/services/budget-calculate.service';
import { BudgetClient } from '../../../home/interfaces/BudgetClient';

@Component({
  selector: 'app-sidebar-controller',
  templateUrl: './sidebar-controller.component.html',
  styleUrls: ['./sidebar-controller.component.scss']
})
export class SidebarControllerComponent {
  dialogConfig = new MatDialogConfig();
  ArrayClients: BudgetClient[]

  constructor(
    private dialog: MatDialog,
    private bcs: BudgetCalculateService
    ) {
    this.dialogConfig = {
      width: '400px',
      height: '100%',
      position: { top: '0', right: '0', bottom: '0' },
      panelClass: 'custom-modalbox'
    }
    this.ArrayClients = this.bcs.showBudgetClientList

  }
  openDialog(): void {
  this.dialog.open(SidebarModalComponent, this.dialogConfig)
  }

  get hiddenBadge() {
    return this.ArrayClients.length > 0 ? false : true
  }

}
