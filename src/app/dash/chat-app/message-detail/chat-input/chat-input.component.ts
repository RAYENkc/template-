import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  
  exampleItems = [];
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createProspect();
  }

  async send(item){

    
      try{
        const test  = this.route.snapshot.paramMap.get('id');
        console.log(environment.createMessage);
        console.log('calling create item endpoint with: ' );
        
        const requestBody = {
          content : item.message,

          photoUrl : '',
          sender : '' ,
          senderId:'',
       
        };
  
        const createResponse =
        await fetch(environment.createMessage + test , {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers:{
            'Content-Type': 'application/json'
          }
        });
  
     
  
        console.log('Success');
        console.log(createResponse.status);
       
 item.message = "";


      }catch(error){
        console.log(error);
      }

  }
  handleSubmit(event,item) {
    if(event.keyCode === 13 ){
      console.log(event) 
     this.send(item)
    }
  }

  createProspect() {
    this.exampleItems.push({
   
    message: '',
    });
  }
  
}


