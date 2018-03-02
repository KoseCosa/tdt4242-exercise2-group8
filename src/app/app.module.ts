import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';

import { ProductService } from './services/product/product.service';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddProductComponent,
    CartComponent,
    NavbarComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
