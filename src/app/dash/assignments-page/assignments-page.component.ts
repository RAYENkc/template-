import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { SelectCommercialComponent } from './select-commercial/select-commercial.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.css']
})
export class AssignmentsPageComponent implements OnInit {
  info = [];
  infos = [];
  pro = [];
  pros = [];
  /**  Variables **/
  exampleCommercials = [];
  exampleCommercial = [];
  exampleProspect  = [];
  examplMyProspect = [];
  searchKey: string;
  listData: MatTableDataSource<any>;
  
  constructor(
    private router: Router,
    private dialog:MatDialog,
  ) { }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.selectAll();
   // this.selectAllCommercial();
  //  this.selectAllProspect();
    this.selectMyProspect();

  }
 
  Prospect(){
    this.router.navigate(['Pages/prospect']);
  }

    //select all the prospects
    async selectAll() {
      try {
        console.log(environment.readAllAssignment);
        console.log('calling read all endpoint');
  
        this.exampleCommercials = [];
       
        const output = await fetch(environment.readAllAssignment);
        console.log('calling read all endpoint for assignment');
        const outputJSON = await output.json();
        this.exampleCommercials = outputJSON;
        console.log('Success');
        console.log(outputJSON);
      } catch (error) {
        console.log(error);
      }
    }


async selectAllCommercial(){
  try{
    this.info = [];
    this.infos = [];
    this.exampleCommercials = [];
    const output = await fetch(environment.readAllAssignment);
    console.log('calling read all endpoint for assignment');
    const outputJSON = await output.json();
    this.exampleCommercials = outputJSON;
  console.log("222");
  for (var val of this.exampleCommercials) {
    console.log("yyyyyyyy");
    console.log(val.data.IdCommercial);
    const output = await fetch(environment.readIdCommercial + val.data.IdCommercial);
        const outputjson = await output.json();
        this.info = outputjson;
        this.infos = this.infos.concat(this.info);
        console.log(this.infos);
      }
      } catch (error) {
        console.log(error);
      }

  }

  async selectAllProspect(){
    try{
      this.pro = [];
      this.pros = [];
      this.exampleCommercials = [];
      const output = await fetch(environment.readAllAssignment);
      console.log('calling read all endpoint for assignment');
      const outputJSON = await output.json();
      this.exampleCommercials = outputJSON;
    console.log("222");
    for (var val of this.exampleCommercials) {
        console.log("yyyyyyyy");
        console.log(val.data.IdProspect);
      const output = await fetch(environment.readId + val.data.IdProspect);
          const outputjson = await output.json();
          this.pro = outputjson;
          this.pros = this.pros.concat(this.pro);
          console.log(this.pros);
        }
        } catch (error) {
          console.log(error);
        }
  
    }

//select one commercial
 async selectCommercial(id: any) {
  try {
    console.log(environment.readIdCommercial);
    this.exampleCommercial = [];
    console.log(id);
    const output = await fetch(environment.readIdCommercial + id);
    console.log('calling read all endpoint with '+ id);
    const outputJSON = await output.json();
    this.exampleCommercial = outputJSON;
    console.log(this.exampleCommercial);
  } catch (error) {
    console.log(error);
  } 
}

//select one prospect
async selectProspect(id: any) {
  try {
    console.log(environment.readId);
    console.log(id);
    this.exampleProspect = [];
   
    const output = await fetch(environment.readId + id);
    console.log('calling read all endpoint with '+ id);
    const outputJSON = await output.json();
    this.exampleProspect = outputJSON;
    console.log( this.exampleProspect );
   
  } catch (error) {
    console.log(error);
  }


}


//select my  prospects
async selectMyProspect() {
  try { 
    console.log(environment.getArchiPro );
    console.log('calling read all endpoint');

    this.examplMyProspect = [];
   
    const output = await fetch(environment.getArchiPro );
    console.log('calling read all endpoint ');
    const outputJSON = await output.json();
    this.examplMyProspect = outputJSON;
    console.log('Success');
    console.log(outputJSON);
  } catch (error) {
    console.log(error);
  }
}

onAssignmentProspect(item){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;

  dialogConfig.data= {
    item: item.id,

  };
  

  dialogConfig.width = "60%";
 // dialogConfig.height ="80%";
  this.dialog.open(SelectCommercialComponent, dialogConfig);
}
}
