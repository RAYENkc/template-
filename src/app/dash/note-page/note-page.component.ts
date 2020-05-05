import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }
}
