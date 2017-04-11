import { PageNotFoundComponent } from './pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComposeMessageComponent } from './compose-message.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'compose', component: ComposeMessageComponent, outlet:'popup' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}