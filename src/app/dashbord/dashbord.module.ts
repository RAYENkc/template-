import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LayoutModule } from '../layout/layout.module';

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

import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { PeospectViewComponent } from './peospect-view/peospect-view.component';
import { ProspectviewComponent } from './prospectview/prospectview.component';

@NgModule({
  declarations: [DashbordComponent, ProspectviewComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    LayoutModule,
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
    MatPaginatorModule,
    MatMenuModule,
    MatTabsModule ,
    MatListModule,
    //FullCalendarModule,
    DragDropModule,
    MatCheckboxModule,
    
  ]
})
export class DashbordModule { }
