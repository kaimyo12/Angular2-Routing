import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor(private router: Router){}

    gotoHeroes(){
      this.router.navigate(['/heroes']);
    }


    gotoCrisis(){
      this.router.navigate(['/crisis-center']);
    }

    composeMessage(){
      this.router.navigate([{ outlets: { popup: ['compose'] } }]);
    }
}
