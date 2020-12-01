import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { BannerTopComponent } from '../../components/home/banner-top/banner-top.component';
import { CardsSpecialDiscountComponent } from '../../components/home/cards-special-discount/cards-special-discount.component';
import { StripeEmailMarketingComponent } from '../../components/home/stripe-email-marketing/stripe-email-marketing.component';
import { StripeQuickMessageComponent } from '../../components/home/stripe-quick-message/stripe-quick-message.component';
import { CardsNewProductComponent } from '../../components/home/cards-new-product/cards-new-product.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
    BannerTopComponent,
    CardsSpecialDiscountComponent,
    StripeQuickMessageComponent,
    StripeEmailMarketingComponent,
    CardsNewProductComponent,
  ],
  providers: [],
})
export class HomeModule { }
