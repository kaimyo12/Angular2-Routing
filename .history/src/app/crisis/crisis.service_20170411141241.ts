
import { CRISES } from './crisis.data';
import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public title: string) { }
}


let crisesPromise = Promise.resolve(CRISES);
@Injectable()
export class CrisisService
{

    getCrises()
    {
        return crisesPromise;
    }

     getCrisis(id: number | string)
    {
        return crisesPromise
           .then(crises => crises.find(crisis => crisis.id === id))
    }
}