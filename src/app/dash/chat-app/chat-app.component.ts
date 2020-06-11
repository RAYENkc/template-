import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],

})
export class ChatAppComponent implements OnInit {
  exampleItems = [];
  constructor(  
    private router: Router,
    private route: ActivatedRoute,) { }
  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.selectAll();
  }

   //select all the vhats
   async selectAll() {
    try { 
      console.log(environment.readAllChat);
      console.log('calling read all endpoint');

      this.exampleItems = [];
     
      const output = await fetch(environment.readAllChat);
      console.log('calling read all endpoint ');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      console.log(outputJSON);
      console.log('1111111111', outputJSON.data.avatar);
    } catch (error) {
      console.log(error);
    }
  }


  messageDetail(id){
    this.router.navigate(['Pages/chat/message',id, this.route.snapshot.paramMap.get('uid')]);
  }


}
