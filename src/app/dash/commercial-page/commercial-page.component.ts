import { Component, OnInit } from '@angular/core';
import { DialogService } from '../shared/dialog.service';
import { NotificationService } from '../shared/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { CommercialService } from '../shared/commercial.service';
import { CommercialsComponent } from './commercials/commercials.component';

@Component({
  selector: 'app-commercial-page',
  templateUrl: './commercial-page.component.html',
  styleUrls: ['./commercial-page.component.css']
})
export class CommercialPageComponent implements OnInit {

  /**  Variables **/
exampleCommercials = [];
exampl = [];
examplt = [];
exa = [];
info = [];
infos = [];
exampleCommercial = [];
searchKey: string;
listData: MatTableDataSource<any>;
  constructor(
    public service : CommercialService,
    private dialogService: DialogService,
    public notificationService : NotificationService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.selectAll();
  }

  //select all the prospects
  async selectAll() {
    try {
      console.log(environment.readAllCommercial);
      console.log('calling read all endpoint');

      this.exampleCommercials = [];
     
      const output = await fetch(environment.readAllCommercial);
      console.log('calling read all endpoint 2222222');
      const outputJSON = await output.json();
      this.exampleCommercials = outputJSON;
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }

 //select onr prospect
 async selectCommercial(item: any) {
  try {
    console.log(environment.readId);
    this.exampleCommercial = [];
   
    const output = await fetch(environment.readId + item.id);
    console.log('calling read all endpoint with '+ item.id);
    const outputJSON = await output.json();
    this.exampleCommercial = outputJSON;
    console.log(this.exampleCommercial);
  } catch (error) {
    console.log(error);
  }
}

onDeleteCommercial(item: any){
  this.dialogService.openConfirmDialog('Are you sure to delete ?')
  .afterClosed().subscribe(res =>{
    if(res){
      this.deleteCommercial(item);
      this.notificationService.warn('! Deleted successfully');
      
    }
  });
}

async deleteCommercial(item: any) {
  try{
    console.log(environment.deleteCommercial);
    console.log('calling delete endpoint with id ' + item.id);
    
    const deleteResponse =
    await fetch(environment.deleteCommercial + item.id, {
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

/******   Dialog   ******/
onEditCommercial(item){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;

  dialogConfig.data= {
    item: item
  };
  

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
  this.dialog.open(CommercialsComponent, dialogConfig);
}

onAddCommercial(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;

  dialogConfig.data= {
    id: null
  };
  

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
 this.dialog.open(CommercialsComponent, dialogConfig);
}




onSearchClear() {
  this.searchKey = "";
this.applyFilter();
}

applyFilter() {
  this.listData.filter = this.searchKey.trim().toLowerCase();
}

}
