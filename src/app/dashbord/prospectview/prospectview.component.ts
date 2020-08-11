import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProspectsComponent } from 'src/app/dash/prospect/prospects/prospects.component';
import { NoteComponent } from 'src/app/dash/prospect/note/note.component';
import { ProspectMangerComponent } from 'src/app/dash/prospect/prospect-manger/prospect-manger.component';

@Component({
  selector: 'app-prospectview',
  templateUrl: './prospectview.component.html',
  styleUrls: ['./prospectview.component.css']
})
export class ProspectviewComponent implements OnInit {

  selectedDate = "";
  exampleItems = [];
  examplt = [];
  exa = [];
  info = [];
  infos = [];
  dialog: any;
  dialogService: any;
  notificationService: any;
  testt = [];
  dd = '';
  mm = '';
  yyyy = '';
  serch ='';
  search = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    console.log('ddddddddddddddddddddddddddddddddddd');
    const test  = this.route.snapshot.paramMap.get('id');
    console.log('testtttttttttttttttttttt', test);
    this.select();
  }

  
  /*
  async select() {
    try {
      const test  = this.route.snapshot.paramMap.get('id');

      this.exampleItems = [];
      this.examplt = [];
      this.exa = [];
      this.info = [];
      this.infos = [];
      const output = await fetch(environment.getProspectAssignment +'29/05/2020/'+ test );
     
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
  }*/


  async select() {
    try {
      const test  = this.route.snapshot.paramMap.get('id');
      this.exampleItems = [];
      this.examplt = [];
      this.exa = [];
      this.info = [];
      this.infos = [];
      const output = await fetch(environment.getProspectAssignment +'29/05/2020/' + 'qP1545BsRoa4kDj8lDGZkOKUFxf1');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      for (var val of this.exampleItems) {
        const output = await fetch(environment.readId  + val.data.IdProspect);
        const outputjson = await output.json();
        this.info = outputjson;
        console.log(this.examplt);
        this.exa = this.exa.concat(this.examplt);
        this.infos = this.infos.concat(this.info);
        console.log(this.exa);
        console.log('heyyyyyyyyyyyyyyyyyyyyyyy' + this.infos);
      }
    } catch (error) {
      console.log(error);
    }
  }


  assignment(){
    this.router.navigate(['Pages/prospect/assignments',this.route.snapshot.paramMap.get('uid')]);
  }
  archivage() {
    this.router.navigate(['Pages/prospect/archivage',this.route.snapshot.paramMap.get('uid')]);
  }
  Home(){
    this.router.navigate(['Dashboard',this.route.snapshot.paramMap.get('uid')]);
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

  onArchive(item : any){
    this.dialogService.openConfirmDialog('Are you sure to Archived ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.onArchiveProspect(item);
        this.notificationService.warn('! archivied successfully');
        
      }
    });
  }

  async onArchiveProspect(item){
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
        archive: 'true'
        
      };
      
      const updateResponse =
      await fetch(environment.update + item.id, {
        method: 'PUT',
        body: JSON.stringify(requestBody),
        headers:{
          'Content-Type': 'application/json'
        }
      });
    //  this.selectAll();
      console.log('Success');
      console.log(updateResponse.status);
 
    
     }catch(error){
      console.log(error);
     }
  } 

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
 