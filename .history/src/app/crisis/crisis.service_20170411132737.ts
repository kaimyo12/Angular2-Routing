import { Crisis } from './crisis';
import { CRISES } from './crisis.data';
import { Injectable } from '@angular/core';

@Injectable();
let crises = Promise.resolve(CRISES);
export class CrisisService
{

    getCrises()
    {

    }

     getCrisis(id: number): Promise<Crisis>
    {
        return this.getCrises()
           .then(crises => crises.find(crisis => crisis.id === id))
    }
}