import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProspectMangerService } from '../../shared/prospect-manger.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';
import { environment } from 'src/environments/environment';
import { ProspectMangerEditComponent } from './prospect-manger-edit/prospect-manger-edit.component';

@Component({
  selector: 'app-prospect-manger',
  templateUrl: './prospect-manger.component.html',
  styleUrls: ['./prospect-manger.component.css']
})
export class ProspectMangerComponent implements OnInit {
  form: FormGroup;
  description:string;
  exampleItems = [];
  exampl = [];
  exampleNote = [];
  exampleItem = [];
  disabledItems = false;
  disable = false;
  constructor(
    public service : ProspectMangerService,
    private dialogRef: MatDialogRef<ProspectMangerComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.id;
   }

  ngOnInit(): void {
    this.selectProMangs();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroupe();
  }

  onSubmit(){
    this.onClose();
  }
  
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroupe();
    this.dialogRef.close();
  }


async deleteProMang(id: any) {
  try{
    console.log(environment.deleteProMang);
    console.log('calling delete endpoint with id ' +this.description + '/'+ id);
    
    const deleteResponse =
    await fetch(environment.deleteProMang  + this.description + '/'+ id, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    });
    this.selectProMangs(); 
    console.log('Success');
    console.log(deleteResponse.status);

     // 
  }catch(error){
    console.log(error);
   }
}

/*****  delete  *****/
onDeleteNote(id: any){
 

  this.dialogService.openConfirmDialog('Are you sure to delete ?')
  .afterClosed().subscribe(res =>{
    if(res){
      this.deleteProMang(id);
      this.notificationService.warn('! Deleted Prospect Manger successfully');
      
    }
  });
}



async selectProMangs() {
  try {
    console.log(environment.readAllProMang);
    console.log('calling read all endpoint');
     
   
    this.exampl = [];
    
    const output = await fetch(environment.readAllProMang + this.description);
    console.log('calling read all endpoint with '+ this.description);
    const outputJSON = await output.json();
    
    this.exampl = outputJSON;
    console.log(this.exampl);


    console.log('Success');
    console.log(outputJSON);
  } catch (error) {
    console.log(error);
  }
}

//select one Notes
async selectProMang(id: any) {
  try {
    console.log(environment.readIdProMang);
 

    this.exampleNote = [];
   
    const output = await fetch(environment.readIdProMang + this.description + '/'+ id,);
    console.log('calling read all endpoint with '+ id);
    const outputJSON = await output.json();
    this.exampleNote  = outputJSON;
    console.log( this.exampleNote);
    
   
  } catch (error) {
    console.log(error);
  }
}

onEditProMang(item){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;

  dialogConfig.data= {
    item: item,
    idProspect :  this.description
   
  };
  

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
  this.dialog.open(ProspectMangerEditComponent, dialogConfig);
}


onAddProMang(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;
  dialogConfig.data= {
    item: null,
    idProspect : this.description
   
  };

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
  this.dialog.open(ProspectMangerEditComponent, dialogConfig);
}


}
