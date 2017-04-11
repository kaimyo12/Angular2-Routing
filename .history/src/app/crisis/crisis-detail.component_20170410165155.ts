import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  templateUrl: './crisis-detail.html',

})
export class CrisisDetailComponent {

   @Input() crisis: Crisis;
  constructor(  private route: ActivatedRoute,
  private router: Router,
  private service: CrisisService){}
  ngOnInit(){
      this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getCrisis(+params['id']))
    .subscribe((Crisis: Crisis) => this.crisis = Crisis);
}
gotoCrisises() {
   let CrisisId = this.crisis ? this.crisis.id : null;
  // Pass along the Crisis id if available
  // so that the CrisisList component can select that Crisis.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['/crises', { id: CrisisId }]);
}
 }