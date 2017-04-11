import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DialogService } from '../dialog.service';


@Component({
  templateUrl: './crisis-detail.html',

})
export class CrisisDetailComponent {

   @Input() 
   crisis: Crisis;
   editTitle: string;

  constructor(  private route: ActivatedRoute,
  private router: Router,
  private service: CrisisService,
  private dialogService: DialogService
  ){}
  ngOnInit(){
      this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getCrisis(+params['id']))
    .subscribe((Crisis: Crisis) => this.crisis = Crisis);

    //this.route.data
      //.subscribe((data: { crisis: Crisis }) => {
        /this.editTitle = data.crisis.title;
       // this.crisis = data.crisis;
      //});
    
}
gotoCrisis() {
   let crisisId = this.crisis ? this.crisis.id : null;
  // Pass along the Crisis id if available
  // so that the CrisisList component can select that Crisis.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
}

cancel(){
  this.gotoCrisis;
}

save(){
  this.crisis.title = this.editTitle;
  this.gotoCrisis();
}

canDeactivate(): Promise<boolean> | boolean {
  // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  if (!this.crisis || this.crisis.title === this.editTitle) {
    return true;
  }
  // Otherwise ask the user with the dialog service and return its
  // promise which resolves to true or false when the user decides
  return this.dialogService.confirm('Discard changes?');
}

 }