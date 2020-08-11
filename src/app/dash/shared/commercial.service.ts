import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    id: new FormControl('', Validators.required),
    LastName: new FormControl('',Validators.required),
    FirstName: new FormControl('',Validators.required),
    Phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Adress: new FormControl('',Validators.required),
    Mail: new FormControl('',Validators.email),
    passe: new FormControl('',Validators.required),

  });

  
  initializeFormProspectGroupe(){
    this.form.setValue({
      $key: null ,
      id: '',
      LastName: '',
      FirstName: '',
      Adress: '',
      Mail: '',
      Phone: '',
      passe: '',
      
      
    });
  }

  

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
