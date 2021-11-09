import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    NabvarComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
