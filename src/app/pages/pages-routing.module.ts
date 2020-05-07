import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashbordComponent } from '../dashbord/dashbord/dashbord.component';
import { ProspectPageComponent } from '../dash/prospect-page/prospect-page.component';
import { ClientPageComponent } from '../dash/client-page/client-page.component';
import { ChatAppComponent } from '../dash/chat-app/chat-app.component';
import { MailPageComponent } from '../dash/mail-page/mail-page.component';
import { NotePageComponent } from '../dash/note-page/note-page.component';
import { CommercialPageComponent } from '../dash/commercial-page/commercial-page.component';
import { AssignmentsPageComponent } from '../dash/assignments-page/assignments-page.component';
import { ArchivageComponent } from '../dash/archivage/archivage.component';


const routes: Routes = [
  {path: 'Pages', component: PagesComponent },
  {path: 'Pages/prospect', component: ProspectPageComponent },
  {path: 'Pages/client', component: ClientPageComponent },
  {path: 'Pages/chat', component: ChatAppComponent },
  {path: 'Pages/mail', component: MailPageComponent },
  {path: 'Pages/note', component: NotePageComponent },
  {path: 'Pages/commercial', component: CommercialPageComponent },
  {path: 'Pages/prospect/assignments', component: AssignmentsPageComponent },
  {path: 'Pages/prospect/archivage', component: ArchivageComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
