import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.css']
})
export class AsidenavbarComponent implements OnInit {
  uid :string;
  exampleItem : [];
  name : string;
  photoUrl : string;
  isAdmin = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
 async ngOnInit() {
    await  this.selectAll();

  }
  home(){
    this.router.navigate(['Dashboard',this.route.snapshot.paramMap.get('uid')]);
  }
  calender(){
    this.router.navigate(['Pages',this.route.snapshot.paramMap.get('uid')]);
  }
  Prospect(){
    this.router.navigate(['Pages/prospect',this.route.snapshot.paramMap.get('uid')]);
  }
  archivage(){
    this.router.navigate(['Pages/prospect/archivage',this.route.snapshot.paramMap.get('uid')]);
  }
  Client(){
    this.router.navigate(['Pages/client',this.route.snapshot.paramMap.get('uid')]);
  }
  Chat(){
    this.router.navigate(['Pages/chat',this.route.snapshot.paramMap.get('uid')]);
  }
  Note(){
    this.router.navigate(['Pages/note',this.route.snapshot.paramMap.get('uid')]);
  }
  Mailbox(){
    this.router.navigate(['Pages/mail',this.route.snapshot.paramMap.get('uid')]);
  }
  Commerical(){
    this.router.navigate(['Pages/commercial',this.route.snapshot.paramMap.get('uid')]);
  }
  assignment(){
    this.router.navigate(['Pages/prospect/assignments',this.route.snapshot.paramMap.get('uid')]);
  }
//select all the prospects
async selectAll() {
  try {
   this.exampleItem = [];
   this.name = "";
   this.photoUrl = "";
    const output = await fetch(environment.getinfoCommercail + this.route.snapshot.paramMap.get('uid'));
    console.log('gggggggggggggg'+ this.route.snapshot.paramMap.get('uid'));
    const outputJSON = await output.json();
    this.exampleItem = outputJSON;
    console.log('Success');
    console.log('ffgeeeeeeeee' + outputJSON[0].data.role);
  
   if(outputJSON[0].data.role == "responsable commercail"){
      console.log("ok");
      this.isAdmin = true;
      console.log("ok22");
    }
  } catch (error) {
    console.log(error);
  }
}
}
