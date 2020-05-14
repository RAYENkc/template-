import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

 //Prospect Form
 form: FormGroup = new FormGroup({
  $key: new FormControl(null),
  name: new FormControl('',Validators.required),
  desc: new FormControl('',Validators.required),
  title: new FormControl('',Validators.required),
  description: new FormControl('',Validators.required),
 

});

initializeProspectGroupe(){
  this.form.setValue({
    $key: null ,
    name: '',
    desc: '',
    title: '',
    description: '',
  
    
  });
}

formemail: FormGroup = new FormGroup({
  $key: new FormControl(null),
  desc: new FormControl('',Validators.required),
 
 

});

initializeGroupe(){
  this.form.setValue({
    $key: null ,
    desc: '',
  
  });
}


formDefault :  FormGroup = new FormGroup({
  $key: new FormControl(null),
  
  title: new FormControl('',Validators.required),
  description: new FormControl('',Validators.required),
});

initializeDefaultGroupe(){
  this.form.setValue({
    $key: null ,
    title: '',
    description : ''
  
  });
}


}
 