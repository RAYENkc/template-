import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogService } from '../../shared/dialog.service';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../../shared/notification.service';

import { ProspectService } from '../../shared/prospect.service';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.css']
})
export class ProspectsComponent implements OnInit {
  form: FormGroup;
  description = [];
  exampleItems = [];
  exampleItem = [ ];
  exampl = [];
  exampleNote = [];
  examplt =[];
  info = [];
  infos = [];
  exa = [];

  disbadd = false;
  disbmodif = false;
  title = "";
  constructor(
    public service : ProspectService,
    private dialogRef: MatDialogRef<ProspectsComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.description = data.item;
  }
  
  ngOnInit(): void {

    if(this.description == null ){

      this.createProspect();
     this.disbadd = true;
     this.disbmodif = false;
     this.title =" Add New Prospects"
    } else {
      this.onUpdateProspect(this.description);
      this.disbadd = false;
      this.disbmodif = true;
      this.title = "Update Prospects"
    }
  

  }
  async selectProspect() {
    try {
      console.log(environment.readId);
   
  
      this.exampl = [];
     
      const output = await fetch(environment.readId + this.description,);
      
      const outputJSON = await output.json();
      this.exampl  = outputJSON;
      console.log( this.exampl);
     
    } catch (error) {
      console.log(error);
    }
  }
  
  
  onClear(){
    this.service.form.reset();
   this.service.initializeProspectGroupe();
   
   
  }
  onSubmit(){
    this.onClose();
  }
  onClose() {
    this.service.form.reset();
   this.service.initializeProspectGroupe();
    this.dialogRef.close();
  }

  
  async saveProspect(item: any) {
    try{
      console.log(environment.create);
      console.log('calling create item endpoint with: ' + item.item);
      
      const requestBody = {
        id: item.id,
        Social_Reason: item.Social_Reason,
        Phone: item.Phone,
        Mail: item.Mail,
        Address: item.Address,
        Role: item.Role,
        DateCreated: item.DateCreated,
      };

      const createResponse =
      await fetch(environment.create, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      this.notificationService.success(':: Submitted Prospect successfully');
      
      this.onClose();
      

      console.log('Success');
      console.log(createResponse.status);
     

    }catch(error){
      console.log(error);
    }
  }
  //select all the prospects
  async selectAll() {
    try {
      console.log(environment.readAll);
      console.log('calling read all endpoint');

      this.exampleItems = [];
     
      const output = await fetch(environment.readAll);
      console.log('calling read all endpoint 2222222');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }
  async select() {
    try {
  

      this.exampleItems = [];
      this.examplt = [];
      this.exa = [];
      this.info = [];
      this.infos = [];
      const output = await fetch(environment.readAll);
     
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
    

      for (var val of this.exampleItems) {
        
        
        const out = await fetch(environment.readAllGeo + val.id);
       
        const output = await fetch(environment.readId  + val.id);
        const outputjson = await output.json();
        this.info = outputjson;

        
        const outputJS = await out.json();
 
       
        this.examplt = outputJS;
       
        console.log(this.examplt);
       this.exa = this.exa.concat(this.examplt);
       this.infos = this.infos.concat(this.info);
       console.log(this.exa);
       console.log(this.infos);
        

      }
     
    } catch (error) {
      console.log(error);
    }
  }

  
  createProspect() {
    this.exampleItems.push({
      id: '',
      Social_Reason: '',
      Phone: '',
      Mail: '',
      Address: '',
      Role: '',
      DateCreated: '',

      save: true
    });
  }

  onUpdateProspect(item : any) {
    this.exampleItem.push({
      id: item.id || '',
      Social_Reason: item.Social_Reason || '',
      Phone: item.Phone || '',
      Mail: item.Mail || '',
      Address: item.Address || '',
      Role: item.Role || '',
      DateCreated: item.DateCreated || '',

      save: true
    });
    console.log(this.exampleItem);
  }
  async updateProspect(item: any) {
    try{
     console.log(environment.update);
     console.log('calling update endpoint with id ' + item.id + ' and value "' + item.Social_Reason);

     const requestBody = {
       Social_Reason: item.Social_Reason,
       Phone: item.Phone,
       Mail: item.Mail,
       Address: item. Address,
       Role: item.Role,
       DateCreated: item. DateCreated,
       archive : 'false'
       
     };
     
     const updateResponse =
     await fetch(environment.update + item.id, {
       method: 'PUT',
       body: JSON.stringify(requestBody),
       headers:{
         'Content-Type': 'application/json'
       }
     });

     console.log('Success');
     console.log(updateResponse.status);

     this.notificationService.success(':: Submitted Prospect successfully');
    
    this.onClose();
   
   
    }catch(error){
     console.log(error);
    }

 }
}
