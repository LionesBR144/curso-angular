import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog3',
  templateUrl: './confirm-dialog3.component.html',
  styleUrls: ['./confirm-dialog3.component.css']
})
export class ConfirmDialog3Component {

  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialog3Component>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialog3Model) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }
 
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
* Class to represent confirm dialog model.
*
* It has been kept here to keep it as part of shared component.
*/
export class ConfirmDialog3Model {

constructor(public title: string, public message: string) {
}
}
