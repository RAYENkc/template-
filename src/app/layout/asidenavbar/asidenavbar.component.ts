import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.css']
})
export class AsidenavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['Dashboard']);
  }

  calender(){
    this.router.navigate(['Pages']);
  }


  Prospect(){
    this.router.navigate(['Pages/prospect']);
  }

  Client(){
    this.router.navigate(['Pages/client']);
  }

  Chat(){
    this.router.navigate(['Pages/chat']);
  }
  Note(){
    this.router.navigate(['Pages/note']);
  }
  Mailbox(){
    this.router.navigate(['Pages/mail']);
  }
  Commerical(){
    this.router.navigate(['Pages/commercial']);
  }
}
