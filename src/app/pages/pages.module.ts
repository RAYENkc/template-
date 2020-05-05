import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { DashModule } from '../dash/dash.module';
import { LayoutModule } from '../layout/layout.module';




@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashModule,
    LayoutModule,
  
    
  ]
})
export class PagesModule { }
