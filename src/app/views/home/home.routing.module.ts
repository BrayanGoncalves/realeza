import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const homeRoutes: Routes = [
  // {
  //   path: '/products',
  //   loadChildren: './views/product-crud/product.module.ts#ProductModule'
  // },
  {
    path: '/',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
