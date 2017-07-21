import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TheaterModule } from 'app/pages/theater/theater.module';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    TheaterModule,
    RouterModule.forRoot([])
  ],
  providers: []
})
export class AppRoutingModule {}
