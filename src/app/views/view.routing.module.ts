import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const viewRoutes: Routes = [
  // {
  //   path: '/products',
  //   loadChildren: './views/product-crud/product.module.ts#ProductModule'
  // },
  {
    path: '',
    loadChildren: './views/home/home.module.ts#HomeModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(viewRoutes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
