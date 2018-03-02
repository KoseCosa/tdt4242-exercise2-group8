import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductViewComponent }      from './product-view/product-view.component';
import { ProductGridViewComponent }   from './product-grid-view/product-grid-view.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid-products', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'list-products', component: ProductViewComponent },
  { path: 'grid-products', component: ProductGridViewComponent },
  { path: 'add-product', component: AdminAddProductComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
