import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProspectService } from '../../shared/prospect.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';
import { environment } from 'src/environments/environment';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {
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
  idClient = "";
  disbadd = false;
  disbmodif = false;
  title = "";
  constructor(
    public service : ClientService,
    private dialogRef: MatDialogRef<ClientCrudComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.item;
    this.idClient = data.id;

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
  
     console.log(this.description);
     console.log(this.idClient );
     
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

  
  async saveProspect(item: any) {
    try{
      console.log(environment.create);
      console.log('calling create item endpoint with: ' + item.TaxNumber);
      console.log('calling create item endpoint with: ' + item.DateOfLastOrder);
      console.log('calling create item endpoint with: ' + item.TaxNumber);
      console.log('calling create item endpoint with: ' + item.TaxNumber);
      console.log('calling create item endpoint with: ' + item.TaxNumber);
      console.log('calling create item endpoint with: ' + item.TaxNumber);
      const requestBody = {
      TaxNumber: item.TaxNumber,
       DateOfLastOrder: item.DateOfLastOrder,
       DataFirstOrder : item.DataFirstOrder,
       Social_Reason: item.Social_Reason,
       Phone: item.Phone,
       Mail: item.Mail,
       Address: item. Address,
       Role: item.Role,
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
      TaxNumber: '',
      Social_Reason: '',
      Phone: '',
      Mail: '',
      Address: '',
      Role: '',
      DateOfLastOrder: '',
      DataFirstOrder: '',
      save: true
    });
  }

  onUpdateProspect(item : any) {
    this.exampleItem.push({
      TaxNumber: item.data.TaxNumber|| '',
      Social_Reason: item.data.Social_Reason || '',
      Phone: item.data.Phone || '',
      Mail: item.data.Mail || '',
      Address: item.data.Address || '',
      Role: item.data.Role || '',
      DateOfLastOrder: item.data.DateOfLastOrder || '',
      DataFirstOrder: item.data.DataFirstOrder || '',
      save: true
    });
    console.log(this.exampleItem);
  }
  async updateProspect(item: any) {
    try{
     console.log(environment.updateClient);
     console.log('calling update endpoint with id ' + this.idClient + ' and value "' + item.Social_Reason);
     console.log('calling create item endpoint with: ' + item.TaxNumber);
     console.log('calling create item endpoint with: ' + item.DateOfLastOrder);
     console.log('calling create item endpoint with: ' + item.Phone);
     console.log('calling create item endpoint with: ' + item.Mail);
     console.log('calling create item endpoint with: ' + item.Address);
     console.log('calling create item endpoint with: ' + item.Role);
     const requestBody = {
       TaxNumber: item.TaxNumber,
       DateOfLastOrder: item.DateOfLastOrder,
       DataFirstOrder : item.DataFirstOrder,
       Social_Reason: item.Social_Reason,
       Phone: item.Phone,
       Mail: item.Mail,
       Address: item. Address,
       Role: item.Role,
       DateCreated:'fff'

     };
     
     const updateResponse =
     await fetch(environment.updateClient +  this.idClient , {
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
