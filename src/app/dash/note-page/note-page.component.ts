import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {

  lat: number = 32.55588289865268;
  lng: number = 7.858674640625005;

  constructor() { }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }
}
