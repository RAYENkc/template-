import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventService } from '../shared/event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../shared/notification.service';
import { DialogService } from '../shared/dialog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dash-page-dialog',
  templateUrl: './dash-page-dialog.component.html',
  styleUrls: ['./dash-page-dialog.component.css']
})
export class DashPageDialogComponent implements OnInit {

  
  id = 1;
  form: FormGroup;
  date = new  Date();
  description:string;
  exampleItems = [];
  exampl = [];
  exampleItem = [];
  exampleCommercail = [];
  title = "";
  selectedFood = "";
  selectedChoix = "";
  isPro : string;
  exampleChoix = ['prospect','client'];
 client = false;
 prospect = false; 
  
  constructor(
    public service : EventService,
    private dialogRef: MatDialogRef<DashPageDialogComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.description = data.date;


  }

ngOnInit(): void {
    this.title =" Add New Event",
    this.createEvent();
    //this.selectAllCommercial();
  }

     //select all the prospects
  async selectAllClient() {
    try {
      console.log(environment.readAllClient);
      console.log('calling read all endpoint');
      this.exampleCommercail = [];
      const output = await fetch(environment.readAllClient);
      const outputJSON = await output.json();
      this.exampleCommercail = outputJSON;
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }

      //select all the prospects
      async selectAllProspect() {
        try {
          console.log(environment.readAll);
          console.log('calling read all endpoint');
          this.exampleCommercail = [];
          const output = await fetch(environment.readAll);
          const outputJSON = await output.json();
          this.exampleCommercail = outputJSON;
          console.log('Success');
          console.log(outputJSON);
        } catch (error) {
          console.log(error);
        }
      }
    

async  saveEvent(item,selectedChoix,selectedFood){ 
  //create new note
 
    try{
      console.log(environment.createEvent );
      console.log('calling create item endpoint with: ' + item.title);
      console.log('calling create item endpoint with: ' + this.description);
      console.log('1111111111111111111111111111111111111111');
      console.log('saveEvent   :       ',selectedFood);
      console.log('1222222222222222222222222222222222222222222');
      console.log('selectedChoix      :     '+selectedChoix);
      const requestBody = {
    
        data: this.description,
        title: item.title,
        uid: selectedFood,
        type: selectedChoix,
      };
  
      const createResponse = 
      await fetch(environment.createEvent  ,  {
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

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroupe();
    }
    onClose() {
      this.service.form.reset();
      this.service.initializeFormGroupe();
      this.dialogRef.close();
    }

    createEvent() {
      this.exampleItem.push({
        title: ''
      });
    }

    onChoix(items: any){
      console.log(items);
      if(items == 'client'){
        this.client = true;
        this.selectAllClient();
      }else {
        this.prospect = true;
        this.selectAllProspect();
      }
    }
}
