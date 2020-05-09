import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  
  exampleItems = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  back(){
    this.router.navigate(['Pages/chat']);
  }


}
