import { Component, OnInit } from '@angular/core';
import { CrisisService } from './crisis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Crisis } from './crisis';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'crisis-list',
    templateUrl: './crisit-list.html',
    providers: [CrisisService]
})

export class CrisisListComponent implements OnInit{
    selectedId;
    crisis: Observable<Crisis[]>;

    constructor(private crisisService: CrisisService,
                private router: Router,
                private route: ActivatedRoute){}

    ngOnInit(){}

  onSelect(crisis: Crisis) {
  this.selectedId = crisis.id;

  // Navigate with relative link
  this.router.navigate([crisis.id], { relativeTo: this.route });
}

}