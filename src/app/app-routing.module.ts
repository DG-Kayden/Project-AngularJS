import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'adminProduct', component: AdminProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

