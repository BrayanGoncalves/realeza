import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCompanyComponent } from './about-company/about-company.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AboutCompanyComponent,
  ],
  declarations: [
    AboutCompanyComponent,
  ],
  providers: [],
})
export class AboutComponentModule { }
