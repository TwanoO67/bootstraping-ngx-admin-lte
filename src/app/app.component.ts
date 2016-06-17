import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { AppHeaderComponent } from "./_widgets/app-header";
import { MenuAsideComponent } from "./_widgets/menu-aside";

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent, MenuAsideComponent]
})

export class App {
  title = 'ng2-admin-lte works!';

  ngOnInit(){
    //on envoi l'evenement resize, pour AdminLTE
    window.dispatchEvent(new Event('resize'));
  }


}
