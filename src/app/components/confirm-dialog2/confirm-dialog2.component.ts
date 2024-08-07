import { Component, Inject,  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog2',
  templateUrl: './confirm-dialog2.component.html',
  styleUrls: ['./confirm-dialog2.component.css']
})
export class ConfirmDialog2Component {
  title: string;
    message: string;
  
    constructor(public dialogRef: MatDialogRef<ConfirmDialog2Component>,
      @Inject(MAT_DIALOG_DATA) public data: ConfirmDialog2Model) {
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
export class ConfirmDialog2Model {

  constructor(public title: string, public message: string) {
  }
}


