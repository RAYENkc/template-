import { Injectable } from '@angular/core';
import { FormGroup, FormControl , Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    idNote: new FormControl('', Validators.required),
    textNote: new FormControl('',Validators.required),
    dateNote: new FormControl(''),
  });

  //Prospect Form
  formProspect: FormGroup = new FormGroup({
    $keyProspect: new FormControl(null),
    id: new FormControl('', Validators.required),
    Social_Reason: new FormControl('',Validators.required),
    Phone: new FormControl('',Validators.required),
    Mail: new FormControl('',Validators.email),
    Address: new FormControl('',Validators.required),
    Role: new FormControl('',Validators.required),
    DateCreated: new FormControl('',Validators.required),

  });

  initializeFormProspectGroupe(){
    this.form.setValue({
      $keyProspect: null ,
      Social_Reason: '',
      Phone: '',
      Mail: '',
      Address: '',
      Role: '',
      DateCreated: '',
      
    });
  }

  initializeFormGroupe(){
    this.form.setValue({
      $key: null ,
      idNote: '',
      textNote: '',
      dateNote: '',
    });
  }
  populateForm(item) {
    console.log(item.id);
  return  item.id ;
  }
}
