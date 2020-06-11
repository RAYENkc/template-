import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
declare var  $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {


  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
 
  authError : any; 
  constructor(
    private router: Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    document.body.className = 'hold-transition login-page';
    $( () => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' 
      });
    });
  }

  

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
   
  }
}
