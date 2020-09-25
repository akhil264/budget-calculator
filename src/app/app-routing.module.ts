import { LearnComponent } from './learn/learn.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AkhilComponent } from './akhil/akhil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PlayersComponent } from './players/players.component';
import { CovidComponent } from './covid/covid.component';
import { CricketersComponent } from './cricketers/cricketers.component';
import { IplComponent } from './ipl/ipl.component';
import { ItemFormComponent } from './item-form/item-form.component';


const routes: Routes = [
  {path:'about' , component:AboutComponent},
  {path:'players', component:PlayersComponent},
  {path:'covid',component:CovidComponent},
  {path:'cricket',component:CricketersComponent},
  {path:'ipl',component:IplComponent},
  {path:'akhil',component:AkhilComponent},
  {path:'item-form',component:ItemFormComponent},
  {path:'signup-form',component:SignupFormComponent},
  {path:'learn',component:LearnComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
