import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommercialSelectService {

  constructor() { }
  form : FormGroup = new FormGroup({
    $key: new FormControl(null),
    id: new FormControl('', Validators.required),
    idProspect: new FormControl('',Validators.required),
    idCommercialAss: new FormControl(0),
    description: new FormControl(''),
  

  });
  
  initializeFormAssigGroupe(){
    this.form.setValue({
      $key: null ,
      id: '',
      idProspect: '',
      idCommercialAss: '',
      description: '',
    });
  }

}
