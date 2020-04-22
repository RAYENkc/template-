import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    window.dispatchEvent(new Event('resize'));
    document.body.className ='';
  }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

}
