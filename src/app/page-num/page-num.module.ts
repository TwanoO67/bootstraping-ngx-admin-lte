import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNumComponent } from './page-num.component';

const ROUTES: Routes = [
    { path: '', component: PageNumComponent }
];

@NgModule({
    declarations: [PageNumComponent],
    imports: [RouterModule.forChild(ROUTES)]
})
export class PageNumModule {}
