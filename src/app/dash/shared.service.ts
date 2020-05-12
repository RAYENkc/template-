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
    dateNote: new FormControl('',Validators.required),
  });

 

  initializeFormProspectGroupe(exampleItem : any){
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
