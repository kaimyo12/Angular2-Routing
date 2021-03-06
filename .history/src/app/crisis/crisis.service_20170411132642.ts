import { Crisis } from './crisis';
import { CRISES } from './crisis.data';
import { Injectable } from '@angular/core';

@Injectable()

export class CrisisService
{
    getCrises(): Promise<Crisis[]>
    {
        return let crisesPromise =  Promise.resolve(CRISES);
    }

     getCrisis(id: number): Promise<Crisis>
    {
        return this.getCrises()
           .then(crises => crises.find(crisis => crisis.id === id))
    }
}