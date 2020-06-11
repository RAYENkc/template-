import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  examplChanged = [];
  searchKey: string;
  listData: MatTableDataSource<any>;
  uid :string;
  exampleItems : [];
  name : string;
  photoUrl : string;
  isAdmin = false;
  
  constructor(
    private router: Router,
    private dialog:MatDialog,
    private route: ActivatedRoute,  ) { }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.selectAll();
    this.selectMyProspect();
    this.selectChanged();
    this.selectusers();
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
        console.log('testttttttttttttttttttttttttt');
        console.log(this.infos);
        console.log('testttttttttttttttttttttttttt');
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
    console.log(environment.getmy );
    console.log('calling read all endpoint');
    this.infos = [];
    this.examplMyProspect = [];
    this.info = [];
    const output = await fetch(environment.getmy + '124578' );
    console.log('calling read all endpoint ');
    const outputJSON = await output.json();
    this.examplMyProspect = outputJSON;
    
    for (var val of this.examplMyProspect) {
      const output = await fetch(environment.readId  + val.data.IdProspect);
      const outputjson = await output.json();
      this.info = outputjson;
      this.infos = this.infos.concat(this.info);

    }


    console.log('Success');
    console.log(outputJSON);
  } catch (error) {
    console.log(error);
  }
}
/**** dialog  ****/
onAssignmentProspect(item){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true ;
  dialogConfig.autoFocus = true;

  dialogConfig.data= {
    item: item.id,

  };
  

  dialogConfig.width = "60%";
  dialogConfig.height ="80%";
  this.dialog.open(SelectCommercialComponent, dialogConfig);
}

//select one commercial
async selectChanged() {
  try {
    console.log(environment.getchanged);
    this.examplChanged = [];
    const output = await fetch(environment.getchanged );
    console.log('calling read all endpoint with ');
    const outputJSON = await output.json();
    this.examplChanged = outputJSON;
    console.log(this.examplChanged);
  } catch (error) {
    console.log(error);
  } 
}

async onValide(item: any) {
  try{
   console.log(environment.valideAssignment);
   const updateResponse =
   await fetch(environment.valideAssignment + item.id, {
     method: 'PUT',
     headers:{
       'Content-Type': 'application/json'
     }
   });

   console.log('Success');
   console.log(updateResponse.status);
  }catch(error){
   console.log(error);
  }

}


async onRefus(item: any) {
  try{
   console.log(environment.refusAssignment);
   const updateResponse =
   await fetch(environment.refusAssignment + item.id, {
     method: 'PUT',
     headers:{
       'Content-Type': 'application/json'
     }
   });
   console.log('Success');
   console.log(updateResponse.status);
  }catch(error){
   console.log(error);
  }

} 
//select all the prospects
async selectusers() {
  try {
   this.exampleItems = [];
   this.name = "";
   this.photoUrl = "";
    const output = await fetch(environment.getinfoCommercail + this.route.snapshot.paramMap.get('uid'));
    const outputJSON = await output.json();
    this.exampleItems = outputJSON;
    console.log('Success');
    console.log( outputJSON[0].data.role);
  
   if(outputJSON[0].data.role == "responsable commercail"){
      console.log("ok");
      this.isAdmin = true;
      console.log("ok22");
    }
    this.name = outputJSON.data.role;
    this.photoUrl = outputJSON.data.photoUrl;
  } catch (error) {
    console.log(error);
  }
}
}
