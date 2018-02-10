import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(ROUTES)]
})
export class HomeModule {}
