import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './heroes.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DialogService } from '../dialog.service';

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
  private service: HeroService,
  private dialogService: DialogService){}
  ngOnInit(){
      this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getHero(+params['id']))
    .subscribe((hero: Hero) => {
      this.hero = hero;
      this.editHeroName = this.hero.name;
  });
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


canDeactivate(): Promise<boolean> | boolean {
  // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  if (!this.hero || this.hero.name === this.editHeroName) {
    return true;
  }
  // Otherwise ask the user with the dialog service and return its
  // promise which resolves to true or false when the user decides
  return this.dialogService.confirm('Discard changes?');
}
}
