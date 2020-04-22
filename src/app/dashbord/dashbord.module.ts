import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [DashbordComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    LayoutModule

  ]
})
export class DashbordModule { }
