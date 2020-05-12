import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashbordModule } from './dashbord/dashbord.module';
import { DashModule } from './dash/dash.module';
import { PagesModule } from './pages/pages.module';
import { SharedService } from './dash/shared.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NoteComponent } from './dash/prospect/note/note.component';
import { ProspectsComponent } from './dash/prospect/prospects/prospects.component';
import { ProspectService } from './dash/shared/prospect.service';
import { ProspectMangerComponent } from './dash/prospect/prospect-manger/prospect-manger.component';
import { ProspectMangerService } from './dash/shared/prospect-manger.service';
import { CommercialService } from './dash/shared/commercial.service';
import { CommercialsComponent } from './dash/commercial-page/commercials/commercials.component';
import { NoteEditComponent } from './dash/prospect/note/note-edit/note-edit.component';
import { ProspectMangerEditComponent } from './dash/prospect/prospect-manger/prospect-manger-edit/prospect-manger-edit.component';
import { SelectCommercialComponent } from './dash/assignments-page/select-commercial/select-commercial.component';
import { CommercialSelectService } from './dash/shared/commercial-select.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DashPageDialogComponent } from './dash/dash-page-dialog/dash-page-dialog.component';
import { EventService } from './dash/shared/event.service';
import { DialogComponent } from './dash/mail-page/dialog/dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashbordModule,
    PagesModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    FullCalendarModule 
 
  ],
  exports: [
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [
    SharedService , 
    ProspectService, 
    ProspectMangerService, 
    CommercialService, 
    CommercialSelectService, 
    EventService, 
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NoteComponent, 
    MatConfirmDialogComponent , 
    ProspectsComponent, 
    ProspectMangerComponent, 
    CommercialsComponent,
    NoteEditComponent , 
    ProspectMangerEditComponent, 
    SelectCommercialComponent ,
    DashPageDialogComponent,
    DialogComponent
    ]
  
})
export class AppModule { }
