import { Injectable } from '@angular/core';
import { FormGroup, FormControl , Validators } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  constructor() { }
  //Prospect Form
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    id: new FormControl('' , Validators.required),
    Social_Reason: new FormControl('',Validators.required),
    Phone: new FormControl('',[Validators.required, Validators.minLength(8) ]  ),
    Mail: new FormControl('',Validators.email),
    Address: new FormControl('',Validators.required),
    Role: new FormControl('',Validators.required),
    DateCreated: new FormControl('',Validators.required),

  });

  initializeProspectGroupe(){
    this.form.setValue({
      $key: null ,
      Social_Reason: '',
      Phone: '',
      Mail: '',
      Address: '',
      Role: '',
      DateCreated: '',
      
    });
  }
  
  initializeFormGroupe(exampleItem : any){
    this.form.setValue({
      $key: null ,
      Social_Reason: exampleItem.Social_Reason,
      Phone: exampleItem.Phone,
      Mail: exampleItem.Mail,
      Address: exampleItem.Address,
      Role: exampleItem.Role,
      DateCreated: exampleItem.DateCreated,
      
    });
  }


}
