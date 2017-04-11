import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component'
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';     // heroes module
import { CrisisCenterModule } from './crisis/crisis-center.module'; //crisis module
import { ComposeMessageComponent } from './compose-message.component'; // compose message
//import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module'
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
     LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, null, 2));
  }
 }
