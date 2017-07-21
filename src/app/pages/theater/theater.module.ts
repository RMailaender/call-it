import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheaterRoutingModule } from './theater-routing.module';
import { TheaterComponent } from './theater.component';

@NgModule({
  imports: [
    CommonModule,
    TheaterRoutingModule
  ],
  declarations: [TheaterComponent]
})
export class TheaterModule { }
