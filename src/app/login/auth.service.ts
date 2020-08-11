import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';


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
 // user$: Observable<any>;
  newUser: any ; 
  authState: any;
  exampleItems = [];
  uid: string;
  userId : string;
    form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    public router: Router,
   
 
  ) { 
    this.afAuth.authState.subscribe(user => {
      this.uid = user.uid;
      
 
    })
  }

  ngOnInit(): void {
    console.log('111111111111111',this.getUid());
  }
 

  login( email: any , password: string) {
    console.log(email);
    this.afAuth.signInWithEmailAndPassword(email,password)
    .catch(error => {
      this.eventAuthError.next(error);
      console.log('error fvvv');
    
    }) 
    .then(userCredential => {
      if(userCredential) {
        console.log(email);
        console.log('11111ya rabi',userCredential.user.uid );
        this.router.navigate(['Dashboard',userCredential.user.uid]);

   
      } 
    })
  }

  createUser(email: any,password: string){
    console.log(email);
    console.log(password);
    this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then( userCredential => {
      console.log('it okkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
       })
    .catch( error => {
      console.log(error);
      this.eventAuthError.next(error);

    })
  }
 getUserInfo() {
    this.afAuth.onAuthStateChanged((user) => {
      if (user != null ) {
   return   this.uid = user.uid;
    }
  });
}

public getUid() : string {
  console.log('ya rabi',this.uid );
  return this.uid;
  
  }

  logout() {
    
    
     this.afAuth.signOut();
     return   this.router.navigate(['login']);
    
  }

  async insertUserData() {
   var user = this.afAuth.currentUser;
    console.log('eeeeeeeeeee' , user); 
    if (user != null) {
     console.log('eeeeeeeeeee' ,user); 
    }
  }

}
