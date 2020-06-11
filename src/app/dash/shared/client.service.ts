import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
  form: FormGroup = new FormGroup({ 
    $key: new FormControl(null),
    TaxNumber: new FormControl('', Validators.required),
    Social_Reason: new FormControl('',Validators.required),
    Mail: new FormControl('',Validators.required),
    Address: new FormControl('', Validators.required),
    Phone: new FormControl('',Validators.required),
    Role: new FormControl('',Validators.required),
    DateOfLastOrder: new FormControl('',Validators.required),
    DataFirstOrder: new FormControl('',Validators.required),
  });

 

  initializeFormGroupe(){
    this.form.setValue({
      $key: null ,
      TaxNumber: '',
      Social_Reason: '',
      Mail: '',
      Address: '',
      Phone: '',
      Role: '',
      DateOfLastOrder: '',
      DataFirstOrder: '',

    });
  }
}
 