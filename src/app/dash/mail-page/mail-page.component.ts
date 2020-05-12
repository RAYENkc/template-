import { Component, OnInit } from '@angular/core';
import { EmailService } from '../shared/email.service';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.css']
})
export class MailPageComponent implements OnInit {
  form: FormGroup;
  exampleItems = [];
  exampl = [];
  constructor(
    public service : EmailService,
    private dialog:MatDialog,
  ) { }


  ngOnInit(): void { 
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.createProspect();
    this.selectEmail();
  }
  async saveProspect(item: any) {
    try{
      console.log(environment.sendEmail);
      console.log('calling create item endpoint with: ' + item.dest);
      console.log('item.title: ' + item); 
      console.log('item.deste: ' + item.dest);
      const requestBody = {
        dest: item.title,
        title: item.title,
        description: item.description,
        name: item.name,
      };

      const createResponse =
      await fetch(environment.sendEmail, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers:{
          'Content-Type': 'application/json'
        }
      });

     
      

      console.log('Success');
      console.log(createResponse.status);
     

    }catch(error){
      console.log(error);
    }
  }

  createProspect() {
    this.exampleItems.push({
      dest: '',
      title: '',
      description: '',
      name: '',
 
  
    });
  }


  async selectEmail() {
    try {
      console.log(environment.readAllEmail);
      console.log('calling read all endpoint');
       
     
      this.exampl = [];
      
      const output = await fetch(environment.readAllEmail );
      console.log('calling read all endpoint with ');
      const outputJSON = await output.json();
      
      this.exampl = outputJSON;
      console.log(this.exampl);
  
  
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }

  onEditEmail(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data= {
      id: item.id,
     title : item.title,
     description : item.description
     
    };
  
    dialogConfig.width = "60%";
    dialogConfig.height ="80%";
    this.dialog.open(DialogComponent, dialogConfig);
  }
}
