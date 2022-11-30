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
  constructor(private dialog: MatDialog) { }
  openDialog(): void {

    this.dialog.open(ModalDialog, {
      data: this.data,
      width: '550px'
    })
  }

}


@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.html'
})
export class ModalDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<ModalDialog>
  ) { }
}