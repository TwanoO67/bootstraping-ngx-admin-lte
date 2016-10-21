import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './services/guard.service';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';

const routes: Routes = [
    // Root
    { path: '', component: HomeComponent},
    { path: 'page/:id', component: PageNumComponent, canActivate: [CanActivateGuard] },
    { path: 'client', component: ClientComponent, canActivate: [CanActivateGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
