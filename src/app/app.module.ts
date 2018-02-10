import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';

// modules
import { NgxAdminLteModule } from 'ngx-admin-lte';

// les pages
import { LoginComponent } from './login/login.component';


// main bootstrap
import { routing } from './app.routes';
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';
import { HeaderWidgetComponent } from './widgets/header-widget/header-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuWidgetComponent,
    HeaderWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxAdminLteModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    MenuWidgetComponent,
    HeaderWidgetComponent
  ]
})
export class AppModule { }
