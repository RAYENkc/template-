import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PeospectViewComponent } from './peospect-view/peospect-view.component';
import { ProspectviewComponent } from './prospectview/prospectview.component';


const routes: Routes = [
  {path: 'Dashboard/:uid', component: DashbordComponent},
  {path: 'Pages/dash/prospect/:uid', component: PeospectViewComponent},
  {path: 'Pages/dash/pro/:id/:uid', component: ProspectviewComponent},
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
