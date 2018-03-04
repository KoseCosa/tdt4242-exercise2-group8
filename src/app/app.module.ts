import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';


import { ProductService } from './services/product/product.service';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CartComponent,
    NavbarComponent,
    ProductsComponent,
    RegistrationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    CartService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
