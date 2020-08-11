import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidclientService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    TaxNumber: new FormControl('',Validators.required),
   
  });
  initializeProspectGroupe(){
    this.form.setValue({
      $key: null ,
      TaxNumber:'',
    });
  }
}
 