import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPageComponent } from './dash-page/dash-page.component';
import { ProspectPageComponent } from './prospect-page/prospect-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { NotePageComponent } from './note-page/note-page.component';
import { MailPageComponent } from './mail-page/mail-page.component';
import { LayoutModule } from '../layout/layout.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatConfirmDialogComponent } from './../mat-confirm-dialog/mat-confirm-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NoteComponent } from './prospect/note/note.component';
import { SharedService } from '../dash/shared.service';
import { ProspectsComponent } from './prospect/prospects/prospects.component';
import { ProspectService } from './shared/prospect.service';
import { ProspectMangerComponent } from './prospect/prospect-manger/prospect-manger.component';
import { CommercialPageComponent } from './commercial-page/commercial-page.component';
import { CommercialsComponent } from './commercial-page/commercials/commercials.component';
import { ProspectMangerEditComponent } from './prospect/prospect-manger/prospect-manger-edit/prospect-manger-edit.component';
import { NoteEditComponent } from './prospect/note/note-edit/note-edit.component';
import { AssignmentsPageComponent } from './assignments-page/assignments-page.component';


@NgModule({
  declarations: [
    DashPageComponent,
    ProspectPageComponent,
    ClientPageComponent,
    ChatAppComponent,
    NotePageComponent,
    MailPageComponent,
    NoteComponent,
    ProspectsComponent,
    ProspectMangerComponent,
    CommercialPageComponent,
    CommercialsComponent,
    ProspectMangerEditComponent,
    NoteEditComponent,
    AssignmentsPageComponent
  ],
  exports: [
    DashPageComponent,
    ProspectPageComponent,
    ClientPageComponent,
    ChatAppComponent,
    NotePageComponent,
    MailPageComponent,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AgmCoreModule.forRoot({
      apiKey : environment.googleMapsKey,
     }),
     HttpClientModule,
    FormsModule,
    NgxJsonViewerModule,

     BrowserAnimationsModule,
     MatDialogModule,
     MatFormFieldModule,
     MatToolbarModule,
     MatGridListModule,
     ReactiveFormsModule,
     MatInputModule,
     MatSelectModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatButtonModule,
     MatCardModule,
     MatIconModule,
     MatSnackBarModule,
     MatTableModule,
     MatProgressSpinnerModule,
     MatPaginatorModule
  ],
  providers: [SharedService , ProspectService],
  entryComponents: [NoteComponent, MatConfirmDialogComponent, ProspectsComponent]
})
export class DashModule { }
