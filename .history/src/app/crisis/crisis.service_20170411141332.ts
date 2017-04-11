import { Crisis } from './crisis';
import { CRISES } from './crisis.data';
import { Injectable } from '@angular/core';

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