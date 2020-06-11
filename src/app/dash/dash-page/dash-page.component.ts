import { Component, OnInit, OnDestroy } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listDayPlugin from '@fullcalendar/list';
import listWeekPlugin from '@fullcalendar/list';
import { environment } from 'src/environments/environment';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin , { Draggable } from '@fullcalendar/interaction';
import { Observable } from 'rxjs';
import { isNull } from 'util';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DashPageDialogComponent } from '../dash-page-dialog/dash-page-dialog.component';
import { NotificationService } from '../shared/notification.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

declare var $;
@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit{
  calendarEvents : any[] = [];
  exampleItems = [];
  examplevent = [];
  examplenote  = [];
  exampleItem = [];
  constructor(
    private dialog:MatDialog,
    public notificationService : NotificationService,
  ) { }

  dayRender(args){
    var cell:HTMLElement = args.el;
    cell.ondblclick = (ev:MouseEvent) => {
      this.addEvent(args.date);
    }
  }

  addEvent(date){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;

    dialogConfig.data= {
      date: date
    };
    console.log(date);
 
    dialogConfig.width = "60%";
    dialogConfig.height ="80%";
    this.dialog.open(DashPageDialogComponent, dialogConfig);
  }


 public  calendarPlugins = [dayGridPlugin,timeGridPlugin,listDayPlugin ,listWeekPlugin ,interactionPlugin ];
   CalanderOptions = {
     header: {
       left: "month, agendweek, agendaDay",
       center: "title",
       
     }
   }
  

 async ngOnInit(){
  await this.selectAll();
  for (let val of this.exampleItems){
     console.log("ya rab");
     console.log(val);
    this.calendarEvents = val;
    console.log(this.calendarEvents);
  }
  this.createNote();
  this.selectnote();
 }

  
  handleDateClick(arg) { // handler method
    alert(arg.dateStr); 
    
  }

   //select all the prospects
   async selectAll() {
    try {
      console.log(environment. readEvent );
      console.log('calling read all endpoint');

     
      this.examplevent = [];
      const output = await fetch(environment.readEvent );
      console.log('calling read all endpoint for event');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
   
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }







  /****  note *****/
    //select all the prospects
    async selectnote() {
      try {
        console.log(environment.readNoteEvent );
        console.log('calling read all endpoint for note ');
  
       
       
        const output = await fetch(environment.readNoteEvent );
        console.log('calling read all endpoint');
        const outputJSON = await output.json();
        this.examplenote = outputJSON;
     
        console.log('Success');
        console.log(outputJSON);
      } catch (error) {
        console.log(error);
      }
    }
  

    async  saveEvent(item){ 
      //create new note
     
        try{
          console.log(environment.createNoteEvent  );
          console.log('calling create item endpoint with: ' + item.title);
          console.log('calling create item endpoint with: ' + item.cal);
    
          const requestBody = {
    
            title: item.title,
          };
      
          const createResponse =
          await fetch(environment.createNoteEvent   ,  {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers:{
              'Content-Type': 'application/json'
            }
          });
        this.notificationService.success(':: Submitted successfully');
          console.log('Success');
          console.log(createResponse.status);
         
      
        }catch(error){
          console.log(error);
        }
      
      }



      createNote() {
        this.exampleItem.push({
         
          title: '',
        
      
         
        });
      }


      drop(event: CdkDragDrop<string[]>) {
        console.log('Element was dragged', event);
        console.log('Element was dragged', event.previousContainer);
        console.log('Element was dragged', event.container.data);
        transferArrayItem(event.previousContainer.data,event.container.data,
          event.previousIndex, event.currentIndex)
        }

} 
