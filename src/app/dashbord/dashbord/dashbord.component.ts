import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { environment } from 'src/environments/environment';
import { MatDialogConfig } from '@angular/material/dialog';
import { PeospectViewComponent } from '../peospect-view/peospect-view.component';
import { NoteComponent } from 'src/app/dash/prospect/note/note.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  providers:[DatePipe]
})
export class DashbordComponent implements OnInit,OnDestroy {
  selectedDate = "";
  exampleItems = [];
  events: string[] = [];
  examplt = [];
  exa = [];
  info = [];
  infos = [];
  nbProspect = [];
  examplEvent = [];
  infoEvent = [];
  infosEvents = [];
  examplClientEvent = [];
  infoClientEvent = [];
  infosClientEvents = [];
  test = [];
  search = [];
  searchh = [];
  dd = '';
  mm = '';
  yyyy = ''; 
  nb = 0; 
  i = 0;
  dialog: any;
  public current_date=new Date();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe
  ) { }
  ngOnDestroy() { 
    window.dispatchEvent(new Event('resize'));
    document.body.className ='';
  }

  ngOnInit(){
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    console.log('eeeeeeeeeeeeeeeeeeeeeee' + this.route.snapshot.paramMap.get('uid'));
    this.select();
    console.log("dsqqqqqqqqqqqqqqqqq"+this.current_date);

    let latest_date =this.datepipe.transform(this.current_date, 'yyyy-MM-dd');
    console.log("dsqqqqqqqqqqqqqqqqq"+latest_date);
  }

  async getdate(getdatechoix : any){
    console.log('getdate :  '+this.search);
    console.log('getdatechoix 2 : ',getdatechoix);
    this.searchh = getdatechoix.split('-')
    this.dd = this.searchh[0];
    this.mm =  this.searchh[1];
    this.yyyy = this.searchh[2];
    console.log(this.dd);
    console.log(this.mm);
    console.log(this.yyyy);

    this.exampleItems = [];
    this.examplt = [];
    this.exa = [];
    this.info = [];
    this.infos = [];
    this.examplEvent = [];
    this.infoEvent = [];
    this.infosEvents = [];
    this.examplClientEvent = [];
    this.infoClientEvent = [];
    this.infosClientEvents = [];

    const output = await fetch(environment.readAllCommercial);
   
    const outputJSON = await output.json();
    this.exampleItems = outputJSON;
    
      this.nb = 1;
    for (var val of this.exampleItems) {
      this.nb ++;
      console.log('sssssssssssssssssssssssssssssssss222'+environment.getProspectAssignment + this.yyyy +'/'+this.mm +'/'+ this.dd  + '/' + val.data.uid);
      const out = await fetch(environment.getProspectAssignment +  this.yyyy +'/'+this.mm +'/'+ this.dd  + '/'+ val.data.uid);
      const outputJS = await out.json();
      this.examplt = outputJS;
   

      this.infos = this.infos.concat(this.examplt.length);
      console.log('1111111111111111111111'+this.examplt);
      for (var test of this.examplt) {
        
        console.log('222222222222'+this.examplt);
     
      }
      for( this.i= 0; this.i<= this.infos.length; this.i++){
        this.exampleItems[this.i].id = this.infos[this.i]; 
      }
      console.log(this.exa);
      console.log(this.exa.length);
      console.log(this.exampleItems);
      console.log(this.exa);
    
      const outEvent = await fetch(environment.getEventDayProspectEvent  + this.yyyy +'/'+this.mm +'/'+ this.dd  + '/'+ val.data.uid);
      const outputEvent = await outEvent.json();
      this.examplEvent = outputEvent ;

  this.exa = this.exa.concat(this.examplEvent);
     
        this.infosEvents = this.infosEvents.concat(this.examplEvent.length);
        console.log('1222222222222222222222222222222'+this.examplEvent);
        for (var test of this.examplEvent) {
          this.exa = [];
          console.log('33333333333333333333333'+this.examplEvent);
       
        }
        for( this.i= 0; this.i<= this.infosEvents.length; this.i++){
          this.exampleItems[this.i].data.role = this.infosEvents[this.i]; 
          
          console.log('44444444444444444444444'+ this.infosEvents[this.i]);
      
        }

        /****************************************************************************************************************************/

        const outClientEvent = await fetch(environment.getEventDayClientEvent  + this.yyyy +'/'+this.mm +'/'+ this.dd  + '/' + val.data.uid);
        const outputClientEvent = await outClientEvent.json();
        this.examplClientEvent = outputClientEvent ;
  
    this.exa = this.exa.concat(this.examplClientEvent);
       
          this.infosClientEvents = this.infosClientEvents.concat(this.examplClientEvent.length);
          console.log('1222222222222222222222222222222'+this.examplClientEvent);
          for (var test of this.examplClientEvent) {
            this.exa = [];
            console.log('33333333333333333333333'+this.examplClientEvent);
          }
          for( this.i= 0; this.i<= this.infosClientEvents.length; this.i++){
            this.exampleItems[this.i].data.image = this.infosClientEvents[this.i]; 
            
            console.log('44444444444444444444444'+ this.infosClientEvents[this.i]);
        
          }
  


     }

    this.nb = this.exa.length;

    
  }

  addEvent(type: string) {
        console.log('eeeeeeeeeeeee'+type);
  }

  async select() {
    try {
  

      this.exampleItems = [];
      this.examplt = [];
      this.exa = [];
      this.info = [];
      this.infos = [];
      this.examplEvent = [];
      this.infoEvent = [];
      this.infosEvents = [];
      this.examplClientEvent = [];
      this.infoClientEvent = [];
      this.infosClientEvents = [];

      const output = await fetch(environment.readAllCommercial);
     
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      
        this.nb = 1;
      for (var val of this.exampleItems) {
        this.nb ++;

        const out = await fetch(environment.getProspectAssignment +'29/05/2020/' + val.data.uid);
        const outputJS = await out.json();
        this.examplt = outputJS;
     
  
        this.infos = this.infos.concat(this.examplt.length);
        console.log('1111111111111111111111'+this.examplt);
        for (var test of this.examplt) {
          
          console.log('222222222222'+this.examplt);
       
        }
        for( this.i= 0; this.i<= this.infos.length; this.i++){
          this.exampleItems[this.i].id = this.infos[this.i]; 
        }
        console.log(this.exa);
        console.log(this.exa.length);
        console.log(this.exampleItems);
        console.log(this.exa);
      

        /****************************************************************************************************************************/

      const outEvent = await fetch(environment.getEventDayProspectEvent  +'29/05/2020/' + val.data.uid);
      const outputEvent = await outEvent.json();
      this.examplEvent = outputEvent ;

  this.exa = this.exa.concat(this.examplEvent);
     
        this.infosEvents = this.infosEvents.concat(this.examplEvent.length);
        console.log('1222222222222222222222222222222'+this.examplEvent);
        for (var test of this.examplEvent) {
          this.exa = [];
          console.log('33333333333333333333333'+this.examplEvent);
       
        }
        for( this.i= 0; this.i<= this.infosEvents.length; this.i++){
          this.exampleItems[this.i].data.role = this.infosEvents[this.i]; 
          
          console.log('44444444444444444444444'+ this.infosEvents[this.i]);
      
        }

        /****************************************************************************************************************************/

        const outClientEvent = await fetch(environment.getEventDayClientEvent  +'29/05/2020/' + val.data.uid);
        const outputClientEvent = await outClientEvent.json();
        this.examplClientEvent = outputClientEvent ;
  
    this.exa = this.exa.concat(this.examplClientEvent);
       
          this.infosClientEvents = this.infosClientEvents.concat(this.examplClientEvent.length);
          console.log('1222222222222222222222222222222'+this.examplClientEvent);
          for (var test of this.examplClientEvent) {
            this.exa = [];
            console.log('33333333333333333333333'+this.examplClientEvent);
          }
          for( this.i= 0; this.i<= this.infosClientEvents.length; this.i++){
            this.exampleItems[this.i].data.image = this.infosClientEvents[this.i]; 
            
            console.log('44444444444444444444444'+ this.infosClientEvents[this.i]);
        
          }
  


     }







  



    this.nb = this.exa.length;

    } catch (error) {
      console.log(error);
    }
  }


  onEditProspect(item) {
    console.log('item :::::::::' + item);
    console.log('item :::::::::' + this.route.snapshot.paramMap.get('uid'));
    this.router.navigate(['Pages/dash/pro',item,this.route.snapshot.paramMap.get('uid')]);
  }

 



}
