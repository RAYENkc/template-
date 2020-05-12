import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { EmailService } from '../../shared/email.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../shared/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  formemail: FormGroup;
  description:string;
  title:string;
  descr: string;
  exampleItems = [];
  constructor(
    public service : EmailService,
    private dialogRef: MatDialogRef<DialogComponent>,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
    ) {
      this.description = data.id;
      this.title = data.title;
      this.descr = data.description;
      this
     }

  ngOnInit(): void {
    this.createNote();
  }
  async updateNote(item: any) {
    try{
     console.log(environment.updateEmail);
    
     console.log(' ya rab el 3alamin',item.desc); 
  
    
     const requestBody = {
       
       dest: item.desc,
       title: this.title ,
       description:  this.descr
       
     };
     
     const updateResponse =
     await fetch(environment.updateEmail +  this.description , {
       method: 'PUT',
       body: JSON.stringify(requestBody),
       headers:{
         'Content-Type': 'application/json'
       }
     });
  
     console.log('Success');
     console.log(updateResponse.status);
  
     this.onClose();
   
    }catch(error){
     console.log(error);
    }
  
  }

  onClose() {
  //  this.service.formemail.reset();
  //  this.service.initializeGroupe();
    this.dialogRef.close();
  }
  createNote() {
    this.exampleItems.push({
     
      desc: '',
 
    });
  }
}
