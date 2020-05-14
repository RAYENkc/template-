import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmailService } from '../../shared/email.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dialog-default',
  templateUrl: './dialog-default.component.html',
  styleUrls: ['./dialog-default.component.css']
})
export class DialogDefaultComponent implements OnInit {
  formDefault: FormGroup;
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
  titleofDialog = "";
  title:string;
  descr: string;
  constructor(
    public service : EmailService,
    private dialogRef: MatDialogRef<DialogDefaultComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.id;
    this.title = data.title;
      this.descr = data.description;
   }

  ngOnInit(): void {
    if(this.description == null ){

      this.createEmail();
     this.disbadd = true;
     this.disbmodif = false;
     this.titleofDialog =" Add New Email "
    } else {
      this.onUpdateEmail(this.title ,this.descr);
      this.disbadd = false;
      this.disbmodif = true;
      this.titleofDialog = "Update Email"
    }
  
  } 





  
  onClear(){
    this.service.formDefault.reset();
   this.service.initializeDefaultGroupe();
   
   
  }
  onSubmit(){
    this.onClose();
  }
  onClose() {
   // this.service.formDefault.reset();
 //  this.service.initializeDefaultGroupe();
    this.dialogRef.close();
  }

  
  async saveProspect(item: any) {
    try{
      console.log(environment.createEmail);
      console.log('calling create item endpoint with: ' + item.title);
      
      const requestBody = { 
        title: item.title,
        description: item.description,
     
      };

      const createResponse =
      await fetch(environment.createEmail, {
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
      console.log(environment.readAllEmail);
      console.log('calling read all endpoint');

      this.exampleItems = [];
     
      const output = await fetch(environment.readAllEmail);
      console.log('calling read all endpoint ');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }

   
  createEmail() {
    this.exampleItems.push({
      title: '',
      description: '',
   
    });
  }

  onUpdateEmail(item : any, desc : any) {
    this.exampleItem.push({
      title: item || '',
      description:  desc|| '',
   

    });
    console.log(this.exampleItem);
  }

  async updateProspect(item: any) {
    try{
     console.log(environment.updateEmail);
     console.log('calling update endpoint with id ' + item.title + ' and value "' + item.descr);

     const requestBody = {
      title: item.title,
      description: item.description,
       
       
     };
     
     const updateResponse =
     await fetch(environment.updateEmail + this.description, {
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
