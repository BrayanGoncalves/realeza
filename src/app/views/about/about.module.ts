import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about.routing.module';
import { AboutComponentModule } from '../../components/about/about.component.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    AboutComponentModule,
  ],
  exports: [],
  declarations: [
    AboutComponent,
  ],
  providers: [],
})
export class AboutModule { }
