import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { StripeEmailMarketingComponent } from '../shared/stripe-email-marketing/stripe-email-marketing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavComponent,
    StripeEmailMarketingComponent,
  ],
  declarations: [
    FooterComponent,
    NavComponent,
    StripeEmailMarketingComponent,
  ],
  providers: [],
})
export class TemplateComponentModule { }
