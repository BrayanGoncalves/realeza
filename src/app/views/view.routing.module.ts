import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const viewRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
    .then(mod => mod.HomeModule),
  },
  {
    path: 'sobre',
    loadChildren: () => import('./about/about.module')
    .then(mod => mod.AboutModule),
  },
  {
    path: 'detalhes-produto',
    loadChildren: () => import('./product-details/product-details.module')
    .then(mod => mod.ProductDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(viewRoutes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
