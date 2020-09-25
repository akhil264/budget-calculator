import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';
import { CricketersComponent } from './cricketers/cricketers.component';
import { PlayersComponent } from './players/players.component';
import { AboutComponent } from './about/about.component';
import { IplComponent } from './ipl/ipl.component';
import { AkhilComponent } from './akhil/akhil.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { InputFormatDirective } from './input-format.directive';
import { LearnComponent } from './learn/learn.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CovidComponent,
    CricketersComponent,
    PlayersComponent,
    AboutComponent,
    IplComponent,
    AkhilComponent,
    FavoriteComponent,
    ItemFormComponent,
    InputFormatDirective,
    LearnComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
