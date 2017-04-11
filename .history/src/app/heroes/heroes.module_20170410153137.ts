import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService } from './heroes.service';
import { HeroRoutingModule } from './heroes-routing.module';
import { CrisisCenterModule } from './crisis/crisis-center.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}