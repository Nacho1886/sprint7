import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss']
})
export class HelpModalComponent {
  @Input() data!: string
  dialogConfig = new MatDialogConfig();
  constructor(private dialog: MatDialog) {
    this.dialogConfig = {
      data: this.data,
      width: '550px',
      height: '100%',
      position: { top: '0', right: '0', bottom: '0' }
    }
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    
    this.dialog.open(ModalDialog, { 
      data: this.data,
      width: '550px'
      // animation:{to:"aside"}
      // enterAnimationDuration,
      // exitAnimationDuration: exitAnimationDuration
    })
  }

}


@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.html'
})
export class ModalDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, 
  public dialogRef: MatDialogRef<ModalDialog>) { }
}