import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// This are the component that are going to be declared
// Remember when adding a component you should never include the .ts
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
