import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const viewRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../views/home/home.module')
    .then(mod => mod.HomeModule),
  },
  {
    path: 'sobre',
    loadChildren: () => import('../views/about/about.module')
    .then(mod => mod.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(viewRoutes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
