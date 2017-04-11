import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  }
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisService } from './crisis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CrisisCenterRoutingModule,
    CommonModule,
    FormsModule
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
