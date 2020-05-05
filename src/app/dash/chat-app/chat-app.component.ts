import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

}
