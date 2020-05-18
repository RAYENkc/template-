import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

interface User {
  uid: string;
  email: string;
  photoUrl: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<String>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  user:Observable<User>
  user$: Observable<any>;
  newUser: any ; 
  authState: any;
 
    form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { 
   
  }


  login( email: string , password: string){
    console.log(email);
    this.afAuth.signInWithEmailAndPassword(email,password)
    .catch(error => {
      this.eventAuthError.next(error);
      console.log('error fvvv');
    
    })
    .then(userCredential => {
      console.log('xxxxxxxxx');
      if(userCredential) {
        this.router.navigate(['Dashboard']);
      } 
    })
  }


  

}
