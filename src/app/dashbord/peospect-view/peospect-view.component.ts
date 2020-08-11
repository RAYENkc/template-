import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/dash/shared/notification.service';
import { DialogService } from 'src/app/dash/shared/dialog.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteComponent } from 'src/app/dash/prospect/note/note.component';
import { ProspectsComponent } from 'src/app/dash/prospect/prospects/prospects.component';
import { ProspectMangerComponent } from 'src/app/dash/prospect/prospect-manger/prospect-manger.component';

@Component({
  selector: 'app-peospect-view',
  templateUrl: './peospect-view.component.html',
  styleUrls: ['./peospect-view.component.css']
})
export class PeospectViewComponent implements OnInit {
  description:string;
  selectedDate = "";
  exampleItems = [];
  examplt = [];
  exa = [];
  info = [];
  infos = [];
  dd = '';
  mm = '';
  yyyy = '';
  serch ='';
  testt = [];
  constructor( 
    public notificationService : NotificationService,
    private dialogService: DialogService,
    private dialog:MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data;
   }

  ngOnInit(): void {
    this.select();
  }


  
  async select() {
    try {
  

      this.exampleItems = [];
      this.examplt = [];
      this.exa = [];
      this.info = [];
      this.infos = [];
      const output = await fetch(environment.getProspectAssignment +'29/05/2020/' + this.description);
     
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      
   
      for (var val of this.exampleItems) {
        const out = await fetch(environment.readId + val.data.IdProspect);
        const outputJS = await out.json();
        this.examplt = outputJS;
        console.log(this.examplt);
        this.exa = this.exa.concat(this.examplt);
        console.log(this.exa);
      }
    

    } catch (error) {
      console.log(error);
    }
  }


  /**********    Dialogs     ********/
  onEditNote(item : any) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;
    dialogConfig.data= {
      id: item.id
    };
    
    
    dialogConfig.width = "60%";
    dialogConfig.height ="80%";
    this.dialog.open(NoteComponent, dialogConfig);
    
    
  }

  onAddProspect(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;
    dialogConfig.data= {
      item: null,
      uid: this.route.snapshot.paramMap.get('uid')
    };

    dialogConfig.width = "60%";
    dialogConfig.height ="80%";
    this.dialog.open(ProspectsComponent, dialogConfig);
  }

  onEditProspect(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true; 

    dialogConfig.data= {
      item: item,
      uid: this.route.snapshot.paramMap.get('uid')
    };
    
 
    dialogConfig.width = "60%";
    dialogConfig.height ="80%";
   this.dialog.open(ProspectsComponent, dialogConfig);
  }

  onEditManger(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;

    dialogConfig.data= {
      id: item.id,
     
    };
    
 
    dialogConfig.width = "60%";
    dialogConfig.height ="80%";
    this.dialog.open(ProspectMangerComponent, dialogConfig);
  }

  assignment(){
    this.router.navigate(['Pages/prospect/assignments',this.route.snapshot.paramMap.get('uid')]);
  }
  archivage() {
    this.router.navigate(['Pages/prospect/archivage',this.route.snapshot.paramMap.get('uid')]);
  }
  async Today(){
    try {
      console.log(environment.gettoday);
      console.log('calling read all endpoint');
      this.exampleItems = [];
      const output = await fetch(environment.gettoday);
      console.log('calling read all endpoint 1111111111');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      console.log(outputJSON.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async getdate(test){
     
    try {
      console.log(environment.getdate);
      console.log('calling read all endpoint');
      this.exampleItems = [];
      console.log(test);
      this.testt = test.split('/')
      this.dd = this.testt[0];
      this.mm =  this.testt[1];
      this.yyyy= this.testt[2];
      const output = await fetch(environment.getdate + this.dd + '/' + this.mm+ '/'+ this.yyyy);
      console.log('calling read all endpoint');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      if(outputJSON == []){
        this.serch = "vide";
      }
      console.log(outputJSON);
      console.log(outputJSON.data.Social_Reason);
    } catch (error) {
      console.log(error);
    }
  }

 


}
