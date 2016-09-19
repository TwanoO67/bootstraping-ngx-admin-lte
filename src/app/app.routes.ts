import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    // Root
    { path: '', component: HomeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
