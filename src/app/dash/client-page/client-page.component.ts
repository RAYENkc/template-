import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialogConfig , MatDialog} from '@angular/material/dialog';
import { ClientCrudComponent } from './client-crud/client-crud.component';
import { DialogService } from '../shared/dialog.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
/*************         Variables      **************/
exampleItems = [];
exampl = [];
examplt = [];
exa = [];
info = [];
infos = [];
exampleProspect = [];
pro = [];
pros = [];


  constructor(
    public service : SharedService,
    private dialogService: DialogService,
    public notificationService : NotificationService,
    private dialog:MatDialog,
    private router: Router

  ) { }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    console.log('rayen : 222222222')
    this.selectAll();

  }

 //select all the prospects
 async selectAll() {
  try {
    console.log(environment.readAllClient);
    console.log('calling read all endpoint');
    this.exampleItems = [];
    const output = await fetch(environment.readAllClient);
    console.log('calling read all endpoint');
    const outputJSON = await output.json();
    this.exampleItems = outputJSON;
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
}
 

onEditClient(item , id){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;
  dialogConfig.data= {
   item: item,
    id: id
  };
  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
 this.dialog.open(ClientCrudComponent, dialogConfig);
}

onAddClient(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;
  dialogConfig.data= {
    item: null,
    id: null
  };

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
  this.dialog.open(ClientCrudComponent, dialogConfig);
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
  //this.dialog.open(ProspectMangerComponent, dialogConfig);
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
    console.log(environment.deleteClient);
    console.log('calling delete endpoint with id ' + item.id);
    
    const deleteResponse =
    await fetch(environment.deleteClient + item.id, {
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
      Address: item.Address,
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

}
