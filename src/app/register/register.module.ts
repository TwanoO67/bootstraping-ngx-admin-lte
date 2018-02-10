import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { RegisterComponent } from './register.component';

const ROUTES: Routes = [
    { path: '', component: RegisterComponent }
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [RouterModule.forChild(ROUTES)]
})
export class RegisterModule {}
