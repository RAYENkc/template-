import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../../shared/dialog.service';
import { NotificationService } from '../../shared/notification.service';
import { ProspectsComponent } from '../../prospect/prospects/prospects.component';
import { ProspectService } from '../../shared/prospect.service';

import { CommercialPageComponent } from '../commercial-page.component';
import { CommercialService } from '../../shared/commercial.service';
import { AuthService } from 'src/app/login/auth.service';
 
@Component({
  selector: 'app-commercials',
  templateUrl: './commercials.component.html',
  styleUrls: ['./commercials.component.css']
})
export class CommercialsComponent implements OnInit {
  form: FormGroup;
  description = [];
  exampleCommercials = [];
  exampleCommercial = [ ];
  exampl = [];
  exampleNote = [];
  examplt =[];
  info = [];
  infos = [];
  exa = [];
  Passe = "";
  disbadd = false;
  disbmodif = false;
  title = "";
  constructor(
    private auth:AuthService,
    public service : CommercialService,
    private dialogRef: MatDialogRef<ProspectsComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.description = data.item;
  }

  ngOnInit(): void {
    if(this.description == null ){

      this.createCommercial();
     this.disbadd = true;
     this.disbmodif = false;
     this.title =" Add New Commercial"
    } else {
      this.onUpdateProspect(this.description);
      this.disbadd = false;
      this.disbmodif = true;
      this.title = "Update Commercial"
    }
  }

  
 //select onr prospect
 async selectCommercial(item: any) {
  try {
    console.log(environment.readId);
 

    this.exampleCommercial = [];
   
    const output = await fetch(environment.readId + item.id);
    console.log('calling read all endpoint with '+ item.id);
    const outputJSON = await output.json();
    this.exampleCommercial = outputJSON;
    console.log(this.exampleCommercial);
  } catch (error) {
    console.log(error);
  }
}

 
onClear(){
  this.service.form.reset();
 this.service.initializeFormProspectGroupe();
 
 
}
onSubmit(){
  this.onClose();
}
onClose() {
  this.service.form.reset();
  this.service.initializeFormProspectGroupe();
  this.dialogRef.close();
}

createCommercial() {
  this.exampleCommercials.push({
    id: '',
    LastName: '',
    FirstName: '',
    Phone: '',
    Mail: '',
    Address: '',
    save: true
  });
}

async saveProspect(item: any) {
  try{
    console.log(environment.createCommercial);
    console.log('test : ' + item);
    console.log('aaaaaaaaaaaaa'+ this.Passe);
    const requestBody = {
      id: item.id,
      LastName: item.LastName,
      Phone: item.Phone,
      Mail: item.Mail,
      Adress: item.Adress,
      FirstName: item.FirstName,
    };

    const createResponse =
    await fetch(environment.createCommercial, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    this.createUser(item.Mail, this.Passe);

    this.notificationService.success(':: Submitted Commercial successfully');
   // this.sellectCommercial.selectAll();
    
     this.onClose();

    console.log('Success');
    console.log(createResponse.status);
   

  }catch(error){
    console.log(error);
  }
}

onUpdateProspect(item : any) {
  this.exampleCommercial.push({
    id: item.id || '',
    LastName: item.data.LastName || '',
    FirstName: item.data.FirstName || '',
    Mail: item.data.Mail || '',
    Address: item.data.Adress || '',
    Phone: item.data.Phone || '',

    save: true
  });
  console.log(this.exampleCommercial);
}

async updateProspect(item: any) {
  try{
   console.log(environment.updateCommercial);
   console.log('calling update endpoint with id ' + item.id + ' and value "' + item.Social_Reason);
   console.log(item);
   const requestBody = {
     LastName: item.LastName,
     Phone: item.Phone,
     Mail: item.Mail,
     Adress: item.Address,
     FirstName: item.FirstName,
     IdManger: item.id,
     
   };
   
   const updateResponse =
   await fetch(environment.updateCommercial + item.id, {
     method: 'PUT',
     body: JSON.stringify(requestBody),
     headers:{
       'Content-Type': 'application/json'
     }
   });

   console.log('Success');
   console.log(updateResponse.status);
   this.notificationService.success(':: Submitted Commercial successfully');

   this.onClose();
 
  }catch(error){
   console.log(error);
  }

}

createUser(email: any, Passe: any){
  console.log('testttttttttttttttttttt',email);
  console.log('test for pass', Passe);
  this.auth.createUser(email, Passe);
 }

}
