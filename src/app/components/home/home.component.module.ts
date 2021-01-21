import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerTopComponent } from './banner-top/banner-top.component';
import { CardsSpecialDiscountComponent } from './cards-special-discount/cards-special-discount.component';
import { StripeQuickMessageComponent } from './stripe-quick-message/stripe-quick-message.component';
import { CardsNewProductComponent } from './cards-new-product/cards-new-product.component';
import { MarketBrandsComponent } from './market-brands/market-brands.component';
import { HighlightProductCategoryComponent } from './highlight-product-category/highlight-product-category.component';
import { CardsSpecialDiscountCarouselComponent } from './cards-special-discount-carousel/cards-special-discount-carousel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    BannerTopComponent,
    CardsSpecialDiscountComponent,
    StripeQuickMessageComponent,
    CardsNewProductComponent,
    MarketBrandsComponent,
    HighlightProductCategoryComponent,
    CardsSpecialDiscountCarouselComponent,
  ],
  declarations: [
    BannerTopComponent,
    CardsSpecialDiscountComponent,
    StripeQuickMessageComponent,
    CardsNewProductComponent,
    MarketBrandsComponent,
    HighlightProductCategoryComponent,
    CardsSpecialDiscountCarouselComponent,
  ],
  providers: [],
})
export class HomeComponentModule { }
