import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkhilComponent } from './akhil/akhil.component';
import { InputFormatDirective } from './input-format.directive';


@NgModule({
  declarations: [
    AppComponent,
    AkhilComponent,
    InputFormatDirective,
    
    
  
    
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
