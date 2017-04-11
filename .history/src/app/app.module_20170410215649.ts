import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component'
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis/crisis-center.module';
import { ComposeMessageComponent } from './compose-message.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module'


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
    AppRoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
