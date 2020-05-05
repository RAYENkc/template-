import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  form: FormGroup;
  description:string;
  exampleItems = [];
  exampl = [];
  exampleNote = [];
  
  constructor(
    public service : SharedService,
    private dialogRef: MatDialogRef<NoteComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.id;
   }

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
   this.service.initializeFormGroupe();
  }

  onSubmit(){
    this.onClose();
  }
  
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroupe();
    this.dialogRef.close();
  }
  
 
//create new note
async saveNote(item: any) {
  try{
    console.log(environment.createNote);
    console.log('calling create item endpoint with: ' + item.idNote);
    console.log('calling create item endpoint with: ' + item.textNote);
    console.log('calling create item endpoint with: ' + item.dateNote);
    const requestBody = {
      idNote: item.idNote,
      textNote: item.textNote,
      dateNote: item.dateNote
    };

    const createResponse =
    await fetch(environment.createNote + this.description ,  {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  this.notificationService.success(':: Submitted successfully');
   this.selectNotes(); 
    console.log('Success');
    console.log(createResponse.status);
   

  }catch(error){
    console.log(error);
  }
}

async updateNote(item: any) {
   try{
    console.log(environment.updateNote);
   

    const requestBody = {
      idNote: item.idNote,
      textNote: item.textNote,
      dateNote: item.dateNote
    };
    
    const updateResponse =
    await fetch(environment.updateNote + this.description + '/'+ item.idNote, {
      method: 'PUT',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });

    console.log('Success');
    console.log(updateResponse.status);

    
  
   }catch(error){
    console.log(error);
   }

}

async deleteNote(id: any) {
  try{
    console.log(environment.deleteNote);
    console.log('calling delete endpoint with id ' +this.description + '/'+ id);
    
    const deleteResponse =
    await fetch(environment.deleteNote  + this.description + '/'+ id, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    });
    this.selectNotes(); 
    console.log('Success');
    console.log(deleteResponse.status);

     // 
  }catch(error){
    console.log(error);
   }
}

/*****  delete  *****/
onDeleteNote(id: any){
 

  this.dialogService.openConfirmDialog('Are you sure to delete ?')
  .afterClosed().subscribe(res =>{
    if(res){
      this.deleteNote(id);
      this.notificationService.warn('! Deleted successfully');
      
    }
  });
}

createNote() {
  this.exampleItems.push({
   
    idNote: '',
    textNote: '',
    dateNote: '',

    save: true
  });
}
onUpdateNote(id) {
 //this.selectNote(id);
 this.exampleItems.push({
   
  idNote:  '',
  textNote: '',
  dateNote: '',

 update: true
});
}
async selectNotes() {
  try {
    console.log(environment.readAllNote);
    console.log('calling read all endpoint');
     
   
    this.exampl = [];
    
    const output = await fetch(environment.readAllNote + this.description);
    console.log('calling read all endpoint with '+ this.description);
    const outputJSON = await output.json();
    
    this.exampl = outputJSON;
    console.log(this.exampl);


    console.log('Success');
    console.log(outputJSON);
  } catch (error) {
    console.log(error);
  }
}
//select one Notes
async selectNote(id: any) {
  try {
    console.log(environment.readId);
 

    this.exampleNote = [];
   
    const output = await fetch(environment.readIdNote + this.description + '/'+ id,);
    console.log('calling read all endpoint with '+ id);
    const outputJSON = await output.json();
    this.exampleNote  = outputJSON;
    console.log('*************************');
    console.log( this.exampleNote);
    console.log("*********************");
   
  } catch (error) {
    console.log(error);
  }
}


}
