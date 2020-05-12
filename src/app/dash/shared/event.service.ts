import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  form: FormGroup = new FormGroup({ 
    $key: new FormControl(null),
    title : new FormControl('', Validators.required),
    
  });

  initializeFormGroupe(){
    this.form.setValue({
      $key: null ,
      title: '',
    
    });
  }
}
