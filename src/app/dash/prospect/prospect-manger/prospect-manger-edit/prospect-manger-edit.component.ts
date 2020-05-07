import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProspectMangerService } from 'src/app/dash/shared/prospect-manger.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/dash/shared/notification.service';
import { DialogService } from 'src/app/dash/shared/dialog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prospect-manger-edit',
  templateUrl: './prospect-manger-edit.component.html',
  styleUrls: ['./prospect-manger-edit.component.css']
})
export class ProspectMangerEditComponent implements OnInit {
  form: FormGroup;
  description:string;
  exampleItems = [];
  exampl = [];
  exampleItem = [];
  disbadd = false;
  disbmodif = false;
  title = "";
  idPro : string;
  idProMang : string;


  constructor(
    public service : ProspectMangerService,
    private dialogRef: MatDialogRef<ProspectMangerEditComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.description = data.item;
    this.idProMang = data.item.idProspectManger;
    this.idPro = data.idProspect;
  }

  ngOnInit(): void {

    if(this.description == null ){

      this.createProMang();
     this.disbadd = true;
     this.disbmodif = false;
     this.title =" Add New Prospects Manger"
    } else {
      this.onUpdateProMang(this.description);
      this.disbadd = false;
      this.disbmodif = true; 
      this.title = "Update Prospects Manger"
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
    await fetch(environment.createProMang +  this.idPro ,  {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  this.notificationService.success(':: Submitted Prospect Manger successfully');
   //this.selectProMangs(); 
    console.log('Success');
    console.log(createResponse.status);
   

  }catch(error){
    console.log(error);
  }
}
  async updateProMang(item: any) {
    try{
     console.log(environment.updateProMang);
     console.log( this.idProMang);
     const requestBody = {
       IdProMang: item.IdProMang,
       LastName: item.LastName,
       FiretName: item.FiretName,
       Phone: item.Phone,
       Adress: item.Adress,
       Funct : item.Funct ,
     };
    
     const updateResponse =
     await fetch(environment.updateProMang + this.idPro + '/'+   this.idProMang, {
       method: 'PUT',
       body: JSON.stringify(requestBody),
       headers:{
         'Content-Type': 'application/json'
       }
     });
     this.notificationService.success(':: Submitted Prospect Manger successfully');
    // this.selectProMangs(); 
     console.log('Success');
     console.log(updateResponse.status);
 
     
   
    }catch(error){
     console.log(error);
    }
 
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
   disable: true,
  update: true
 });
 console.log(this.exampleItem);
 }

createProMang() {
  this.exampleItems.push({
   
    IdProMang: '',
    LastName: '',
    FiretName: '',
    Phone: '',
    Adress: '',
    Funct : '',
    //disabledItems : true,
    save: true
  });
}
onUpdateProMang(item){
  this.exampleItem.push({
    IdProMang: item.data.IdProMang,
    LastName: item.data.LastName,
    FiretName: item.data.FiretName,
    Phone: item.data.Phone,
    Adress: item.data.Adress,
    Funct : item.data.Funct,
  
    update: true,
 
  });
  console.log(this.exampleItem);
}

}
