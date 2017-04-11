import {Component, OnInit}from '@angular/core';


@Component({
  templateUrl: './crisis-detail.html',

})
export class CrisisDetailComponent {

   @Input() hero: Hero;
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
 }