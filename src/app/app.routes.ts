import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateGuard, LayoutAuthComponent, LayoutLoginComponent, LayoutRegisterComponent } from 'ngx-admin-lte';

import { LoginComponent } from './login/login.component';

// Components
import { AppComponent } from './app.component';
import { HeaderWidgetComponent } from './widgets/header-widget/header-widget.component';

const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
      {
        canActivate: [CanActivateGuard],
        loadChildren: './home/home.module#HomeModule',
        path: ''
      },
      {
        canActivate: [CanActivateGuard],
        loadChildren: './home/home.module#HomeModule',
        path: 'home'
      },
    ],
    component: LayoutAuthComponent,
    data: [{
      'skin': 'skin-black',
      'display_tasks': false,
      'header_components': [{
        class: HeaderWidgetComponent,
        data: {
          label: 'test widget'
        }
      }]
    }],
    path: '',
  },
  //route with no boxed_style layout
  {
    canActivate: [CanActivateGuard],
    children: [
      {
        canActivate: [CanActivateGuard],
        loadChildren: './page-num/page-num.module#PageNumModule',
        path: 'page/:id'
      },
    ],
    component: LayoutAuthComponent,
    data: [{
      'skin': 'skin-black',
      'boxed_style': false,
      'display_tasks': false,
      'header_components': [{
        class: HeaderWidgetComponent,
        data: {
          label: 'test widget'
        }
      }]
    }],
    path: '',
  },
  // not logged routes
  {
    children: [
      {
        component: LoginComponent,
        path: ''
      }
    ],
    component: LayoutLoginComponent,
    path: 'login',
  },
  {
    children: [
      {
        loadChildren: './register/register.module#RegisterModule',
        path: ''
      }
    ],
    component: LayoutRegisterComponent,
    path: 'register',
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
