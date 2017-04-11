import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }            from './app.component';
import { PageNotFoundComponent }   from './not-found.component';

import { AppRoutingModule }        from './app-routing.module';
import { HeroesModule }            from './heroes/heroes.module';
import { CrisisCenterModule }      from './crisis-center/crisis-center.module';
import { AdminModule }             from './admin/admin.module';

import { DialogService }           from './dialog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
