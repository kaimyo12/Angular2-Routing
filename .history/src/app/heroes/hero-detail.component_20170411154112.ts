import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './heroes.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.html',
})
export class HeroDetailComponent implements OnInit {
  @Input() 
  
  hero: Hero;
  editHeroName: string;

  constructor(  private route: ActivatedRoute,
  private router: Router,
  private service: HeroService){}
  ngOnInit(){
      this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getHero(+params['id']))
    .subscribe((hero: Hero) => this.hero = hero);
}
gotoHeroes() {
   let heroId = this.hero ? this.hero.id : null;
  // Pass along the hero id if available
  // so that the HeroList component can select that hero.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['/heroes', { id: heroId }]);
}

save()
{
  this.hero.name = this.editHeroName;
  this.gotoHeroes();
}

cancel(){
  this.gotoHeroes();
}
}
