import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './hero.data';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }

    getHero(id: number): Promise<Hero>
    {
        return this.getHeroes()
           .then(heroes => heroes.find(hero => hero.id === id))
    }
}
