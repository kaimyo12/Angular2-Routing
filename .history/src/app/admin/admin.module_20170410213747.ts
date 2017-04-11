import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

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
  providers:[AuthGuard, AuthService],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
