import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisService } from './crisis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CrisisCenterRoutingModule,
    CommonModule
  ],

  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
  ],
  providers:[CrisisService],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterModule { }
