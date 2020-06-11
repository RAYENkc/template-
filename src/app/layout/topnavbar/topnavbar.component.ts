import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {
  uid :string;
  exampleItems : [];
  name : string;
  photoUrl : string;
   i = 0;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
  ) { }

 async ngOnInit() {
  await  this.selectAll();
  }

  logout() {
    this.auth.logout().then();
  
  }
    //select all the prospects
    async selectAll() {
      try {
       this.exampleItems = [];
       this.name = "";
       this.photoUrl = "";
        const output = await fetch(environment.getinfoCommercail + this.route.snapshot.paramMap.get('uid'));
        const outputJSON = await output.json();
        this.exampleItems = outputJSON;
        console.log('Success');
        console.log(outputJSON.data.username);
        console.log(outputJSON.data.photoUrl);
       this.name = outputJSON.data.username;
       this.photoUrl = outputJSON.data.photoUrl;
      } catch (error) {
        console.log(error);
      }
    }



 

 

}
