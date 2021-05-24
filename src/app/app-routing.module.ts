import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { LayoutStandardComponent } from './layouts/public/layout-standard/layout-standard.component';
import { LayoutFrontComponent } from './layouts/layout-front/layout-front.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFrontComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },

      {
        path: 'home',
        loadChildren: () =>
          import(`./pages/front/home/home.module`).then((m) => m.HomeModule),
      },
      {
        path: 'product/:key',
        loadChildren: () =>
          import(`./pages/front/product-info/product-info.module`).then(
            (m) => m.ProductInfoModule
          ),
      },
      {
        path: 'view-cart',
        loadChildren: () =>
          import(`./pages/front/view-cart/view-cart.module`).then(
            (m) => m.ViewCartModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutStandardComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin-login',
        pathMatch: 'full',
      },

      {
        path: 'home',
        loadChildren: () =>
          import(`./pages/home/home.module`).then((m) => m.HomeModule),
      },

      {
        path: 'brands',
        loadChildren: () =>
          import(`./pages/maintenance/brands/brands.module`).then(
            (m) => m.BrandsModule
          ),
      },

      {
        path: 'category',
        loadChildren: () =>
          import(`./pages/maintenance/category/category.module`).then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import(`./pages/maintenance/products/products.module`).then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import(`./pages/inventory/inventory.module`).then(
            (m) => m.InventoryModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import(`./pages/orders/orders.module`).then((m) => m.OrdersModule),
      },
    ],
  },
  {
    path: 'admin-login',
    loadChildren: () =>
      import(`./pages/admin-login/admin-login.module`).then(
        (m) => m.AdminLoginModule
      ),
  },

  {
    path: 'user-login',
    loadChildren: () =>
      import(`./pages/user-login/user-login.module`).then(
        (m) => m.UserLoginModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule, SharedModule],
})
export class AppRoutingModule {}
