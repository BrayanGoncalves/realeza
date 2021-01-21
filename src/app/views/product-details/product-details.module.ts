import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsRoutingModule } from './product-details.routing.module';
import { ProductDetailsComponentModule } from '../../components/product-details/product-details.component.module';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    ProductDetailsComponentModule,
  ],
  exports: [],
  declarations: [
    ProductDetailsComponent,
  ],
  providers: [],
})
export class ProductDetailsModule { }
