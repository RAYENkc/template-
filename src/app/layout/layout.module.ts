import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';
import { DashbodyComponent } from './dashbody/dashbody.component';



@NgModule({
  declarations: [
    TopnavbarComponent,
    AsidenavbarComponent, 
    FooternavbarComponent, 
    SettingsnavbarComponent, 
    DashbodyComponent
  ],
  exports: [
    TopnavbarComponent,
    AsidenavbarComponent, 
    FooternavbarComponent, 
    SettingsnavbarComponent,
    DashbodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
