import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from '../product-details/product-details.component';

const productDetailsRoutes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(productDetailsRoutes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule {}
