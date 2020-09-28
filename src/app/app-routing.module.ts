import { AkhilComponent } from './akhil/akhil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { OktaCallbackComponent } from '@okta/okta-angular';



const routes: Routes = [
  {path:'akhil',component:AkhilComponent},

  {path: '', redirectTo: '/home/', pathMatch: 'full'},
  
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
