import { Routes } from '@angular/router';
import { RoutesComponent } from './layout/routes/routes.component';
import { isLoginGuard } from './core/Guards/is-login.guard';
import { AuthComponent } from './Pages/Auth/auth/auth.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [isLoginGuard],
    component: RoutesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'Product',
        title: 'Products',
        loadComponent: () =>
          import('./Pages/product/product.component').then(
            (m) => m.ProductComponent
          ),
      },
      {
        path: 'ProductDetailes/:productId',
        title: 'Product Details',
        loadComponent: () =>
          import('./Pages/product-details/product-details.component').then(
            (m) => m.ProductDetailsComponent
          ),
      },
      {
        path: 'Categories',
        title: 'Categories',
        loadComponent: () =>
          import('./Pages/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
      },
      {
        path: 'CategoriesProducts/:categoryId',
        title: 'Category Products',
        loadComponent: () =>
          import(
            './Pages/product-by-categoris/product-by-categoris.component'
          ).then((m) => m.ProductByCategorisComponent),
      },
      {
        path: 'Brands',
        title: 'Brands',
        loadComponent: () =>
          import('./Pages/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
      },
      {
        path: 'BrandsProducts/:BrandId',
        title: 'Brands',
        loadComponent: () =>
          import('./Pages/product-by-brands/product-by-brands.component').then(
            (m) => m.ProductByBrandsComponent
          ),
      },
      {
        path: 'Cart',
        title: 'Cart',
        loadComponent: () =>
          import('./Pages/cart/cart.component').then((m) => m.CartComponent),
      },
      {
        path: 'Personal',
        title: 'Personal',
        loadComponent: () =>
          import('./Pages/personal/personall/personall.component').then(
            (m) => m.PersonallComponent
          ),
        children: [
          {
            path: 'personalComp',
            loadComponent: () =>
              import(
                './Components/PersonalComponent/personal/personal.component'
              ).then((m) => m.PersonalComponent),
            children: [
              {
                path: 'ShowAddress',
                loadComponent: () =>
                  import(
                    './Components/PersonalComponent/show-address/show-address.component'
                  ).then((m) => m.ShowAddressComponent),
              },
            ],
          },
        ],
      },
      {
        path: 'Wishlist',
        title: 'Wishlist',
        loadComponent: () =>
          import('./Pages/wishlist/wishlist.component').then(
            (m) => m.WishlistComponent
          ),
      },
      {
        path: 'orders/:orderId',
        title: 'Order',
        loadComponent: () =>
          import(
            './Components/PersonalComponent/show-order/show-order.component'
          ).then((m) => m.ShowOrderComponent),
      },
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          {
            path: 'login',
            title: 'Login',
            loadComponent: () =>
              import('./Pages/Auth/login/login.component').then(
                (m) => m.LoginComponent
              ),
          },
          {
            path: 'Register',
            title: 'Register',
            loadComponent: () =>
              import('./Pages/Auth/register/register.component').then(
                (m) => m.RegisterComponent
              ),
          },
          {
            path: 'Forgetpassword',
            title: 'Forget Password',
            loadComponent: () =>
              import(
                './Pages/Auth/forget-password/forget-password.component'
              ).then((m) => m.ForgetPasswordComponent),
          },
        ],
      },
      {
        path: '**',
        title: 'Not Found',
        loadComponent: () =>
          import(
            './Components/SharedComponent/not-found/not-found.component'
          ).then((m) => m.NotFoundComponent),
      },
    ],
  },
];
