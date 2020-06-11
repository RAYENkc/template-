import { Component, OnInit, ViewChild } from '@angular/core';
//import { AgmMap, AgmMarker } from '@agm/core';
import { environment } from 'src/environments/environment';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NoteComponent } from '../prospect/note/note.component';
import { SharedService } from '../shared.service';
import { DialogService } from '../shared/dialog.service';
import { NotificationService } from '../shared/notification.service';
import { ProspectsComponent } from '../prospect/prospects/prospects.component';
import { ProspectMangerComponent } from '../prospect/prospect-manger/prospect-manger.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-prospect-page',
  templateUrl: './prospect-page.component.html',
  styleUrls: ['./prospect-page.component.css']
})
export class ProspectPageComponent implements OnInit {

/*************         Variables      **************/
exampleItems = [];
exampl = [];
examplt = [];
exa = [];
info = [];
infos = [];
exampleProspect = [];
searchtable = [];
search = [];
pro = [];
pros = [];
prospectLength = [];
testt = [];
dd = '';
mm = '';
yyyy = '';
displayedColumns: string[] =['id', 'Social_Reason' , 'Phone' , 'Address', 'Mail' , 'Role' , 'DateCreated', 'Settings'];

@ViewChild(MatPaginator) paginator:  MatPaginator;
searchKey: string;
  constructor(public service : SharedService,
    private dialogService: DialogService,
    public notificationService : NotificationService,
    private dialog:MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    ) { }
  listData: MatTableDataSource<any>;

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.select();
    
    //this.listData.paginator = this.paginator;
    // this.listData = new MatTableDataSource(this.exampleProspect);
  //  console.log(this.exampleItems);
  }
  lat: number;
  lng: number;
  locationChosen = false;
  onChoseLocation(event){
   this.lat = event.coords.lat;
   this.lng = event.coords.lng;
   
   this.locationChosen = true;
  }

/**************         Prospects      **************/

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

  //select onr prospect
  async selectProspect(item: any) {
    try {
      console.log(environment.readId);
   

      this.exampleProspect = [];
     
      const output = await fetch(environment.readId + item.id);
      console.log('calling read all endpoint with '+ item.id);
      const outputJSON = await output.json();
      this.exampleProspect = outputJSON;
      console.log('*************************');
      console.log( this.exampleProspect );
      console.log("*********************");
     
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
      const output = await fetch(environment.getActivePro);
     
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


 

  async saveProspect(item: any) {
    try{
      console.log(environment.create);
      console.log('calling create item endpoint with: ' + item.item);


      const requestBody = {
        id: item.id,
        Social_Reason: item.Social_Reason,
        Phone: item.Phone,
        Mail: item.Mail,
        Address: item. Address,
        Role: item.Role,
        DateCreated: item. DateCreated,
      };

      const createResponse =
      await fetch(environment.create, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log('Success');
      console.log(createResponse.status);
       this.selectAll();

    }catch(error){
      console.log(error);
    }
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

      // call select all to update the table
      this.selectAll();
    
     }catch(error){
      console.log(error);
     }

  }
  
  onDeleteProspect(item: any){
    this.dialogService.openConfirmDialog('Are you sure to delete ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.deleteProspect(item);
        this.notificationService.warn('! Deleted successfully');
        
      }
    });
  }

  async deleteProspect(item: any) {
    try{
      console.log(environment.delete);
      console.log('calling delete endpoint with id ' + item.id);
      
      const deleteResponse =
      await fetch(environment.delete + item.id, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      });

      console.log('Success');
      console.log(deleteResponse.status);

       // call select all to update the table
       this.selectAll();
    }catch(error){
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


/********              Geolocations      ***********/

async selectGeo(item: any) {
  try {
    console.log(environment.readAllGeo);
    console.log('calling read all endpoint');
     
   
    this.exampl = [];
    const output = await fetch(environment.readAllGeo + item.id);
    console.log('calling read all endpoint with '+ item.id);
    const outputJSON = await output.json();
    
    this.exampl = outputJSON;
    console.log(this.exampl);


    console.log('Success');
    console.log(outputJSON);
  } catch (error) {
    console.log(error);
  }
}

// create new geo location
async createGeo(item: any) {
  try{
  console.log(environment.createGeo);
  console.log('calling createGeo endpoint with id ' + item.id );
  const geo ={
    geo : {
    lat: this.lat,
    long: this.lng,
    }
  };
  console.log(geo);
  const createGeoResponse =
  await fetch(environment.createGeo + item.id , {
    method: 'POST',
    body: JSON.stringify(geo),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  this.notificationService.success(':: Submitted geoLocation successfully');
  this.select();
  console.log('Success');
  console.log(createGeoResponse.status);
}catch(error){
  console.log(error);
 }
  
}

////delete Geolocations
onDelete(id : any, idGeo: any){
  this.dialogService.openConfirmDialog('Are you sure to delete this geoLocation ?')
  .afterClosed().subscribe(res =>{
    if(res){
   this.deleteGeo(id, idGeo);
      this.notificationService.warn('! Deleted successfully');
      
    } 
  });
}

async deleteGeo(id : any, idGeo: any) {
  try{
    console.log(environment.deleteGeo);
    console.log('calling deleteGeo endpoint with id ' + id + '/' + idGeo);
    
    const deleteResponse =
    await fetch(environment.deleteGeo+ id + '/' + idGeo, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    });
    this.select();
    console.log('Success');
    console.log(deleteResponse.status);

     // call select all to update the table
     this.selectAll();
  }catch(error){
    console.log(error);
   }
}

//update Geolocation

async updateGeo(id : any, idGeo: any) {
  try{
  console.log(environment.updateGeo);
  console.log('calling deleteGeo endpoint with id ' + id + '/' + idGeo);
  const geo ={
    geo : {
    lat: this.lat,
    long: this.lng,
    }
  };
  console.log(geo);
  const updateGeoResponse =
  await fetch(environment.updateGeo + id + '/' + idGeo, {
    method: 'PUT',
    body: JSON.stringify(geo),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  this.select();
  console.log('Success');
  console.log(updateGeoResponse.status);
}catch(error){
  console.log(error);
 }
  
}


  onSearchClear() {
    this.searchKey = "";
  this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
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
      this.selectAll();
      console.log('Success');
      console.log(updateResponse.status);
 
    //  this.notificationService.success(':: Submitted Prospect successfully');
     
   //  this.dialogRef.close();
    
    
     }catch(error){
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
      item: null
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
      item: item
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
      id: item.id
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
      console.log(outputJSON);
      console.log(outputJSON.data.Social_Reason);
    } catch (error) {
      console.log(error);
    }
  }
  
}