import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProspectMangerService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
   // IdProMang: new FormControl('', Validators.required),
    LastName: new FormControl('',Validators.required),
    FiretName: new FormControl('',Validators.required),
    Phone : new FormControl('',Validators.required),
    Adress : new FormControl('',Validators.required),
    Funct: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.email),
 
  });

  initializeFormGroupe(){
    this.form.setValue({
      $key: null ,
     // IdProMang: '',
      LastName: '',
      FiretName: '',
      Phone: '',
      Adress: '',
      Funct: '',
      Email: ''
    });
  }

}
