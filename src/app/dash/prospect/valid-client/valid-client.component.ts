import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ValidclientService } from '../../shared/validclient.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ProspectsComponent } from '../prospects/prospects.component';

@Component({
  selector: 'app-valid-client',
  templateUrl: './valid-client.component.html',
  styleUrls: ['./valid-client.component.css']
})
export class ValidClientComponent implements OnInit {
item : any;
exampleItems = [];



  constructor(
    public service : ValidclientService,
    private dialogRef: MatDialogRef<ProspectsComponent>,
  ) { }

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
   this.service.initializeProspectGroupe();
   
   
  }

  async VerifClient(tax: any){

  
 
    try{
      console.log(environment.createClient);
     
      const requestBody = {
        Social_Reason: this.item.Social_Reason,
        Phone: this.item.Phone,
        Mail: this.item.Mail,
        Address: this.item.Address,
        Role:this.item.Role,
        //uid:''
      };
  
      const createResponse =
      await fetch(environment.createClient, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const deleteResponse =
      await fetch(environment.delete + this.item.id, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      });
    }catch(error){
      console.log(error);
    }
  }
  onClose() {
    this.service.form.reset();
   this.service.initializeProspectGroupe();
    this.dialogRef.close();
  }
}
