import { Routes, CanActivateFn } from '@angular/router';
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
import { isLoginGuard } from './core/Guards/is-login.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', title:"Home",component: HomeComponent},
    {path: 'Product', title:"Products",component: ProductComponent},
    {path: 'ProductDetailes/:productId', title:"ProductDetaile",component: CartComponent},
    {path: 'Categories', title:"Categories",component: CategoriesComponent},
    {path: 'CategoriesProducts/:CatgoryId', title:"Categories",component: ProductByCategorisComponent},
    {path: 'Brands', title:"Brands",component: BrandsComponent},
    {path: 'BrandsProducts/:CatgoryId', title:"Brands",component: ProductByBrandsComponent},
    {path: 'Cart', title:"Cart",component: CartComponent},
    {path: 'Personal', title:"Personal",component: CartComponent},
    {path: 'Wishlist', title:"Wishlist",component: WishlistComponent},
   
    {
        path: 'auth',
        component: AuthComponent,
       canActivate:[isLoginGuard],
        children: [
            {path: 'auth', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login',title:"Login" ,component: LoginComponent},
            {path: 'Register',title:"Register" ,component: RegisterComponent},
            {path: 'Forgetpassword',title:"ForgetPassword" ,component: ForgetPasswordComponent},
        ]
    },

    {path:"**" ,title:"Not Found" ,component:NotFoundComponent },
];
