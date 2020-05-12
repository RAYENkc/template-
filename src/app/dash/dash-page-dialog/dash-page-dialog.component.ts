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
  
  title = "";
  isPro : string;
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
  }

async  saveEvent(item){ 
  //create new note
 
    try{
      console.log(environment.createEvent );
      console.log('calling create item endpoint with: ' + item.title);
      console.log('calling create item endpoint with: ' + this.description);

      const requestBody = {
    
        data: this.description,
        title: item.title,
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
       
        title: '',
      
    
       
      });
    }
}
