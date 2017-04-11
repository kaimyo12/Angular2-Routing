import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './heroes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.html',
    styleUrls: ['./hero-list.css'],
    providers: [HeroService]
})

export class HeroListComponent implements OnInit{
 
  //heroes: Hero[];
  selectedHero: Hero;
  heroes: Observable<Hero[]>;
  hero: Hero;

  private selectedId: number;

  constructor(private service: HeroService, private router: Router, private route: ActivatedRoute) { }

  //getHeroes(): void {
  //  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  //}

  ngOnInit(): void {
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHeroes();
      });
  } 
  
  isSelected(hero: Hero) 
  { 
    return hero.id === this.selectedId; 
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  viewDetails(hero: Hero)
  {
    this.router.navigate(['/hero', hero.id]);
  }

gotoCrisis() {
   let crisisId = this.heroes ? this.hero.id : null;
  // Pass along the Crisis id if available
  // so that the CrisisList component can select that Crisis.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
}

}