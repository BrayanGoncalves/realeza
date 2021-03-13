import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SwiperModule,
  SWIPER_CONFIG,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';

import { BannerTopComponent } from './banner-top/banner-top.component';
import { CardsSpecialDiscountComponent } from './cards-special-discount/cards-special-discount.component';
import { StripeQuickMessageComponent } from './stripe-quick-message/stripe-quick-message.component';
import { CardsNewProductComponent } from './cards-new-product/cards-new-product.component';
import { MarketBrandsComponent } from './market-brands/market-brands.component';
import { HighlightProductCategoryComponent } from './highlight-product-category/highlight-product-category.component';
import { CardsSpecialDiscountCarouselComponent } from './cards-special-discount-carousel/cards-special-discount-carousel.component';
import { CardsSpecialDiscountSwiperComponent } from './cards-special-discount-swiper/cards-special-discount-swiper.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  observer: true,
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
  ],
  exports: [
    BannerTopComponent,
    CardsSpecialDiscountComponent,
    StripeQuickMessageComponent,
    CardsNewProductComponent,
    MarketBrandsComponent,
    HighlightProductCategoryComponent,
    CardsSpecialDiscountCarouselComponent,
    CardsSpecialDiscountSwiperComponent,
  ],
  declarations: [
    BannerTopComponent,
    CardsSpecialDiscountComponent,
    StripeQuickMessageComponent,
    CardsNewProductComponent,
    MarketBrandsComponent,
    HighlightProductCategoryComponent,
    CardsSpecialDiscountCarouselComponent,
    CardsSpecialDiscountSwiperComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
})
export class HomeComponentModule { }
