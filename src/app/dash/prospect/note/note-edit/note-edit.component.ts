import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/dash/shared/dialog.service';
import { NotificationService } from 'src/app/dash/shared/notification.service';
import { SharedService } from 'src/app/dash/shared.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  form: FormGroup;
  date = new  Date();
  description:string;
  exampleItems = [];
  exampl = [];
  exampleItem = [];
  disbadd = false;
  disbmodif = false;
  title = ""; 
  isPro : string;
  constructor( 
    public service : SharedService,
    private dialogRef: MatDialogRef<NoteEditComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.description = data.item;
    this.isPro = data.idProspect;
  }

  ngOnInit(): void {
    if(this.description == null ){

     this.createNote();
     this.disbadd = true;
     this.disbmodif = false;
     this.title =" Add New Prospects"
    } else {
      this.onUpdateNote(this.description);
      this.disbadd = false;
      this.disbmodif = true; 
      this.title = "Update Prospects"
    }
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
    await fetch(environment.createNote +  this.isPro  ,  {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      } 
    });
  this.notificationService.success(':: Submitted successfully');
  this.onClose();
    console.log('Success');
    console.log(createResponse.status);
   

  }catch(error){
    console.log(error);
  }
}

createNote() {
  this.exampleItems.push({
   
    idNote: '',
    textNote: '',
    dateNote: '',

    save: true   
  });
}

onUpdateNote(item) {
  //this.selectNote(id);
  this.exampleItem.push({
    
   idNote:  item.idNote,
   textNote: item.textNote,
   dateNote: item.dataNote,

  update: true
 });
 }

 async updateNote(item: any) {
  try{
   console.log(environment.updateNote);
  
   console.log(item.textNote); 
   console.log(item.dateNote); 
   console.log( this.isPro);
   const requestBody = {
     
     textNote: item.textNote,
     dateNote: '',
     
   };
   
   const updateResponse =
   await fetch(environment.updateNote +   this.isPro  + '/'+ item.idNote, {
     method: 'PUT',
     body: JSON.stringify(requestBody),
     headers:{
       'Content-Type': 'application/json'
     }
   });

   console.log('Success');
   console.log(updateResponse.status);
this.selectNotes();
   this.onClose();
 
  }catch(error){
   console.log(error);
  }

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

}
