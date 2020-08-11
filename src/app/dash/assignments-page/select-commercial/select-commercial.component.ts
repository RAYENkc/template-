import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from '../../shared/dialog.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CommercialService } from '../../shared/commercial.service';
import { environment } from 'src/environments/environment';
import { CommercialSelectService } from '../../shared/commercial-select.service';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-select-commercial',
  templateUrl: './select-commercial.component.html',
  styleUrls: ['./select-commercial.component.css']
})
export class SelectCommercialComponent implements OnInit {
  form: FormGroup;
  description = [];
  exampleCommercials = [];
  exampleCommercial = [];
  exampleItem = [];
  exampleId = [];
  IdAssignment : string;
  item = [];
  title= "";
  test = "";

  
selectedFood = "";
selectedDescription = "";
selectedCar = "";
  constructor( public service : CommercialSelectService,
    private dialogRef: MatDialogRef<SelectCommercialComponent>,
    public notificationService : NotificationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.description = data.item;
    
    }

  ngOnInit(): void {
    this.title =" Affect Prospect";
   // this.onUpdateAss( this.description);
    this.selectAllCommercial(); 
    this.onUpdateAss(); 
  }

      //select all the prospects
      async selectAll() {
        try {
          console.log(environment.getmyProspect);
          console.log('calling read all endpoint');
    
          this.exampleCommercials = [];
         
          const output = await fetch(environment.getmyProspect);
          console.log('calling read all endpoint for assignment');
          const outputJSON = await output.json();
          this.exampleCommercials = outputJSON;
          console.log('Success');
          console.log(outputJSON);
        } catch (error) {
          console.log(error);
        }
      }
      //select all the prospects
  async selectAllCommercial() {
    try {
      console.log(environment.readAllCommercial);
      console.log('calling read all endpoint');

      this.exampleItem = [];
     
      const output = await fetch(environment.readAllCommercial);
      console.log('calling read all endpoint 2222222');
      const outputJSON = await output.json();
      this.exampleItem = outputJSON;
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }


      
async updateAssignment(item : any, selectedDescription: any ){
  try{
    console.log(environment.updateAssignment);
    console.log('calling update endpoint with id ' + item.IdAssignment );
    console.log('testtttttttttttt', selectedDescription);
   await this.onUpdateAss(); 
    console.log(this.exampleId[0].id);
    console.log(item);
    const requestBody = {
      IdCommercialAffect: item,
      valid : 'changed',
      description :  selectedDescription
     // description : item.description ,
    };
    

    const updateResponse =
    await fetch(environment.updateAssignment +  this.exampleId[0].id , {
      method: 'PUT',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });
 
    console.log('Success');
    console.log(updateResponse.status); 
    this.notificationService.success(':: Submitted Commercial successfully');
    this.onClose();
  
   }catch(error){
    console.log(error);
   }
 
}
disableSelect = new FormControl(false);

async onUpdateAss() {
  try {
    console.log(environment.getAssig);
    console.log('testttttttttttttttttttttt'+ this.description );
    this.exampleId = [];
    const output = await fetch(environment.getAssig + this.description );
    const outputJSON = await output.json();
    this.exampleId = outputJSON;
    console.log('Success');
    console.log(this.exampleId);
    console.log(this.exampleId[0].id);
  } catch (error) {
    console.log(error);
  }
}

onClose() {
 // this.service.form.reset();
 this.service.initializeFormAssigGroupe();
  this.dialogRef.close();
}



selectCar(event: Event) {
  this.selectedCar = (event.target as HTMLSelectElement).value;
}


}
