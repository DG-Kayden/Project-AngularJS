import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { ToppageComponent } from './toppage/toppage.component';
import { PartnertComponent } from './partnert/partnert.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CommonService } from './common.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    DetailComponent,
    ToppageComponent,
    PartnertComponent,
    FooterComponent,
    CategoryComponent,
    AdminProductComponent,
    LoginComponent,
    CartComponent,
    CommonService

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
