import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProspectMangerService } from '../../shared/prospect-manger.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prospect-manger',
  templateUrl: './prospect-manger.component.html',
  styleUrls: ['./prospect-manger.component.css']
})
export class ProspectMangerComponent implements OnInit {
  form: FormGroup;
  description:string;
  exampleItems = [];
  exampl = [];
  exampleNote = [];
  exampleItem = [];
  constructor(
    public service : ProspectMangerService,
    private dialogRef: MatDialogRef<ProspectMangerComponent>,
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
    console.log(environment.createProMang);
    const requestBody = {
      IdProMang: item.IdProMang,
      LastName: item.LastName,
      FiretName: item.FiretName,
      Phone: item.Phone,
      Adress: item.Adress,
      Funct : item.Funct ,
    };

    const createResponse =
    await fetch(environment.createProMang + this.description ,  {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  this.notificationService.success(':: Submitted Prospect Manger successfully');
   this.selectProMangs(); 
    console.log('Success');
    console.log(createResponse.status);
   

  }catch(error){
    console.log(error);
  }
}

async updateProMang(item: any) {
   try{
    console.log(environment.updateProMang);
   

    const requestBody = {
      IdProMang: item.IdProMang,
      LastName: item.LastName,
      FiretName: item.FiretName,
      Phone: item.Phone,
      Adress: item.Adress,
      Funct : item.Funct ,
    };
   
    const updateResponse =
    await fetch(environment.updateProMang + this.description + '/'+  item.IdProMang, {
      method: 'PUT',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    this.notificationService.success(':: Submitted Prospect Manger successfully');
    this.selectProMangs(); 
    console.log('Success');
    console.log(updateResponse.status);

    
  
   }catch(error){
    console.log(error);
   }

}

async deleteProMang(id: any) {
  try{
    console.log(environment.deleteProMang);
    console.log('calling delete endpoint with id ' +this.description + '/'+ id);
    
    const deleteResponse =
    await fetch(environment.deleteProMang  + this.description + '/'+ id, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    });
    this.selectProMangs(); 
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
      this.deleteProMang(id);
      this.notificationService.warn('! Deleted Prospect Manger successfully');
      
    }
  });
}

createProMang() {
  this.exampleItems.push({
   
    IdProMang: '',
    LastName: '',
    FiretName: '',
    Phone: '',
    Adress: '',
    Funct : '',
    save: true
  });
}
onUpdateNote(item : any) {
 //this.selectNote(id);
 this.exampleItem.push({
   
  IdProMang: item.idProspectManger,
  LastName: item.data.LastName,
  FiretName: item.data.FiretName,
  Phone: item.data.Phone,
  Adress: item.data.Adress,
  Funct : item.data.Funct,

 update: true
});
console.log(this.exampleItem);
}
async selectProMangs() {
  try {
    console.log(environment.readAllProMang);
    console.log('calling read all endpoint');
     
   
    this.exampl = [];
    
    const output = await fetch(environment.readAllProMang + this.description);
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
async selectProMang(id: any) {
  try {
    console.log(environment.readIdProMang);
 

    this.exampleNote = [];
   
    const output = await fetch(environment.readIdProMang + this.description + '/'+ id,);
    console.log('calling read all endpoint with '+ id);
    const outputJSON = await output.json();
    this.exampleNote  = outputJSON;
    console.log( this.exampleNote);
    
   
  } catch (error) {
    console.log(error);
  }
}
}
