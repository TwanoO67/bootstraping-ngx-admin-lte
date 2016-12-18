import { Component }  from '@angular/core';
import { Router }             from '@angular/router';
import { BreadcrumbService }        from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  private display: boolean = false;
  private header: string = '';
  private description: string = '';
  private levels: Array<any> = [];

  constructor(private breadServ: BreadcrumbService) {
    // getting the data from the services
    this.breadServ.current.subscribe((data) => {
      this.display = data.display;
      this.header = data.header;
      this.description = data.description;
      this.levels = data.levels;
    });
  }

}
