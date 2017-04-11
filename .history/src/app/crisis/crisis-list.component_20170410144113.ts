import { Component, OnInit } from '@angular/core';
import { CrisisService } from './crisis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'crisis-list',
    templateUrl: './crisit-list.html',
    providers: [CrisisService]
})

export class CrisisListComponent implements OnInit{

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