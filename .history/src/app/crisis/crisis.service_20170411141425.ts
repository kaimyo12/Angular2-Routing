import { Crisis } from './crisis';
import { Injectable } from '@angular/core';

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService {
  static nextCrisisId = 100;
  getCrises() { return crisesPromise; }
  getCrisis(id: number | string) {
    return crisesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }
}