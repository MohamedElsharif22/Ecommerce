import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProuductsComponent } from './components/prouducts/prouducts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './guard/auth.guard';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
        title: 'home',
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [authGuard],
        title: 'cart',
      },
      {
        path: 'brands',
        component: BrandsComponent,
        canActivate: [authGuard],
        title: 'brands',
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [authGuard],
        title: 'categories',
      },
      {
        path: 'products',
        component: ProuductsComponent,
        canActivate: [authGuard],
        title: 'products',
      },
      {
        path: 'product-detailes/:id',
        component: ProductDetailsComponent,
        canActivate: [authGuard],
        title: 'Product',
      },
      {
        path: 'wish-list',
        component: WishListComponent,
        canActivate: [authGuard],
        title: 'wish-list',
      },
      {
        path: 'payment/:id',
        component: PaymentComponent,
        canActivate: [authGuard],
        title:'Check Out'
      },
      {
        path: 'allorders',
        component: AllOrdersComponent,
        canActivate: [authGuard],
        title:'All Orders'
      },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Register',
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
      },
    ],
  },
  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { scrollPositionRestoration:'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
