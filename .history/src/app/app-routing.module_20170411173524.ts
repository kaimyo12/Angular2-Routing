import { PageNotFoundComponent } from './pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComposeMessageComponent } from './compose-message.component'
import { AdminModule } from './admin/admin.module'
import { CanDeactivateGuard }    from './can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'compose', component: ComposeMessageComponent, outlet:'popup' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers:[CanDeactivateGuard]
})
export class AppRoutingModule {}