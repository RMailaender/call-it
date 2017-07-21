import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TheaterModule } from 'app/pages/theater/theater.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TheaterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
