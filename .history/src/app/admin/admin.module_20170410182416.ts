import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule
  ],

  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageHeroesComponent,
    ManageCrisesComponent
  ],
  providers:[],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterModule { }
