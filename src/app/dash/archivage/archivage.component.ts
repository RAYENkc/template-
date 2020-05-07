import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DialogService } from '../shared/dialog.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-archivage',
  templateUrl: './archivage.component.html',
  styleUrls: ['./archivage.component.css']
})
export class ArchivageComponent implements OnInit {
  exampleItems= [];
  pro = [];
  pros = [];
  exampleCommercials = [];
  constructor(
    private router: Router,
    private dialogService: DialogService,
    public notificationService : NotificationService,
  ) { }

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.selectAll();
    this.select();
    }
  Prospect(){
    this.router.navigate(['Pages/prospect']);
  }

  //select all the prospects
  async selectAll() {
    try {
      console.log(environment.getArchiPro );
      console.log('calling read all endpoint');

      this.exampleItems = [];
     
      const output = await fetch(environment.getArchiPro );
      console.log('calling read all endpoint 2222222');
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }
  
onUpdate(item: any){
  this.dialogService.openConfirmDialog('Are you sure to activated ?')
  .afterClosed().subscribe(res =>{
    if(res){
      this.updateProspectArchive(item);
      this.notificationService.warn('! activatedsuccessfully');
      
    }
  });
}

  async updateProspectArchive(item){
    try{
      console.log(environment.update);
      console.log('calling update endpoint with id ' + item.id + ' and value "' + item.Social_Reason);
 
      const requestBody = {
        Social_Reason: item.Social_Reason,
        Phone: item.Phone,
        Mail: item.Mail,
        Address: item. Address,
        Role: item.Role,
        DateCreated: item. DateCreated,
        archive: 'false'
        
      };
      
      const updateResponse =
      await fetch(environment.update + item.id, {
        method: 'PUT',
        body: JSON.stringify(requestBody),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      this.selectAll();
      console.log('Success');
      console.log(updateResponse.status);

     }catch(error){
      console.log(error);
     }
 
  }
async  select(){
    try{
      this.pro = [];
      this.pros = [];
      this.exampleCommercials = [];
      const out = await fetch(environment.readAll);
      console.log('calling read all endpoint for assignment');
      const output= await out.json();
      this.exampleCommercials = output;
  
    for (var val of this.exampleCommercials) {
        if(val.archive == 'true') {
          this.pro = val;
          this.pros = this.pros.concat(this.pro);
          console.log(this.pros);
        }
  
        }
        } catch (error) {
          console.log(error);
        }
  }

  


}
