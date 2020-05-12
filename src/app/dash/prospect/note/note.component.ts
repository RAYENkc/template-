import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';
import { NoteEditComponent } from './note-edit/note-edit.component';


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
  disbadd = false;
  disbmodif = false;
  title = "";


  
  constructor(
    public service : SharedService,
    private dialogRef: MatDialogRef<NoteComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.id;
   }
 
  ngOnInit(): void {
    this.selectNotes();
  
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
    console.log( this.exampleNote);
   
  } catch (error) {
    console.log(error);
  }
}

onEditNote(item){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;

  dialogConfig.data= {
    item: item,
    idProspect : item.prospectId
   
  };
  

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
  this.dialog.open(NoteEditComponent, dialogConfig);
}
onAddNote(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;
  dialogConfig.data= {
    item: null,
    idProspect : this.description
   
  };

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
  this.dialog.open(NoteEditComponent, dialogConfig);
}

}
