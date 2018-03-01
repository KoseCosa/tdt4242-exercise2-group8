import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { CartComponent } from './cart/cart.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductGridViewComponent } from './product-grid-view/product-grid-view.component';
import { AdminPageService } from './admin-page/admin-page.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailComponent,
    ProductGridViewComponent,
    AdminAddProductComponent,
    CartComponent,
    RegistrationComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService, AdminPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
