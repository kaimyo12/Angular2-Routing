import { Component, OnInit } from '@angular/core';
import { CrisisService } from './crisis.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Crisis } from './crisis';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'crisis-list',
    templateUrl: './crisis-list.html',
    styleUrls: ['./crisis-list.css'],
    providers: [CrisisService]
})

export class CrisisListComponent implements OnInit{
    selectedId: number;
    crises: Observable<Crisis[]>;

    constructor(private crisisService: CrisisService,
                private router: Router,
                private route: ActivatedRoute){}

    ngOnInit(){
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.crisisService.getCrises();
      });
    }
      
    isSelected(crisis : Crisis) 
  { 
    return crisis.id === this.selectedId; 
  }  

  onSelect(crisis: Crisis) {
  this.selectedId = crisis.id;

  // Navigate with relative link
  this.router.navigate([crisis.id], { relativeTo: this.route });
}
}