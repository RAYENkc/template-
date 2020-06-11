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
import { MessageDetailComponent } from '../dash/chat-app/message-detail/message-detail.component';
import { ChatDetailComponent } from '../dash/chat-app/message-detail/chat-detail/chat-detail.component';


const routes: Routes = [
  {path: 'Pages', component: PagesComponent },
  {path: 'Pages/prospect/:uid', component: ProspectPageComponent },
  {path: 'Pages/client/:uid', component: ClientPageComponent },
  {path: 'Pages/chat/:uid', component: ChatAppComponent },
  {path: 'Pages/mail/:uid', component: MailPageComponent }, 
  {path: 'Pages/note/:uid', component: NotePageComponent },
  {path: 'Pages/commercial/:uid', component: CommercialPageComponent },
  {path: 'Pages/prospect/assignments/:uid', component: AssignmentsPageComponent },
  {path: 'Pages/prospect/archivage/:uid', component: ArchivageComponent },
  //{path: 'Pages/chat/message', component: MessageDetailComponent  },
 {path: 'Pages/chat/message/:id/:uid', component: ChatDetailComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
