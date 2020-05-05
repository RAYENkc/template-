import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    window.dispatchEvent(new Event('resize'));
    document.body.className ='';
  }
  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }
}
