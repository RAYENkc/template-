import { Injectable } from '@angular/core';
import { MatDialog ,  MAT_DIALOG_DATA , MatDialogRef  } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../../mat-confirm-dialog/mat-confirm-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(msg){
    return   this.dialog.open(MatConfirmDialogComponent, {
        width: '450px',
        
        panelClass: 'confirm-dialog-container',
        disableClose: true,
        data : {
          message : msg 
        }
      });
    }
}
