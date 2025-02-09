import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductComponent } from './Pages/product/product.component';
import { BrandsComponent } from './Pages/brands/brands.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { CartComponent } from './Pages/cart/cart.component';
import { PersonalComponent } from './Pages/personal/personal.component';
import { ProductByBrandsComponent } from './Pages/product-by-brands/product-by-brands.component';
import { ProductByCategorisComponent } from './Pages/product-by-categoris/product-by-categoris.component';
import path from 'path';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { ForgetPasswordComponent } from './Pages/Auth/forget-password/forget-password.component';
import { NotFoundComponent } from './Components/SharedComponent/not-found/not-found.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { AuthComponent } from './Pages/Auth/auth/auth.component';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';
import { RoutesComponent } from './layout/routes/routes.component';
import { ShowOrderComponent } from './Components/PersonalComponent/show-order/show-order.component';

export const routes: Routes = [
  {
    path: '',
    component: RoutesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Home', component: HomeComponent },
      { path: 'Product', title: 'Products', component: ProductComponent },
      {
        path: 'ProductDetailes/:productId',
        title: 'ProductDetaile',
        component: ProductDetailsComponent,
      },
      {
        path: 'Categories',
        title: 'Categories',
        component: CategoriesComponent,
      },
     
      {
        path: 'CategoriesProducts/:categoryId',
        title: 'Categories',
        component: ProductByCategorisComponent,
      },
      { path: 'Brands', title: 'Brands', component: BrandsComponent },
      {
        path: 'BrandsProducts/:BrandId',
        title: 'Brands',
        component: ProductByBrandsComponent,
      },
      { path: 'Cart', title: 'Cart', component: CartComponent },
      { path: 'Personal', title: 'Personal', component: PersonalComponent },
      { path: 'Wishlist', title: 'Wishlist', component: WishlistComponent },
      {path:'orders/:orderId',title:'order',component:ShowOrderComponent},
      {
        path: 'auth',
        component: AuthComponent,
         
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', title: 'Login', component: LoginComponent },
          { path: 'Register', title: 'Register', component: RegisterComponent },
          {
            path: 'Forgetpassword',
            title: 'ForgetPassword',
            component: ForgetPasswordComponent,
          },
        ],
      },

      { path: '**', title: 'Not Found', component: NotFoundComponent },
    ],
  },
];
