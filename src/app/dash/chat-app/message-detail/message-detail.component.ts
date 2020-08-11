import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  exampleItems = []; 
  constructor(
    private route: ActivatedRoute
  ) {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
   }

  ngOnInit(): void {
    this.selectAll();
  }
 
   //select all the vhats
   async selectAll() {
    
    try { 
     const test  = this.route.snapshot.paramMap.get('id');
      console.log(environment.readAllMessage);
      console.log('calling read all endpoint');

      this.exampleItems = [];
     
      const output = await fetch(environment.readAllMessage + test);
      console.log('calling read all endpoint ');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      console.log('1111111111', outputJSON.data.avatar);
    } catch (error) {
      console.log(error);
    }
  }

}
