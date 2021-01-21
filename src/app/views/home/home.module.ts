import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponentModule } from '../../components/home/home.component.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponentModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
  ],
  providers: [],
})
export class HomeModule { }
