import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html'
})
export class PageNumComponent implements OnInit, OnDestroy {
  private id: number = 0;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService
  ) { }

  public ngOnInit() {
    // when calling routes change
    let idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {
      this.id = data[idkey];
    });

    // changing header
    this.breadServ.set({
      description: 'This is our ' + idkey + ' pages',
      display: true,
      header : 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        },
        {
          icon: 'clock-o',
          link: [ '/page/' + idkey ],
          title: 'Page' + idkey
        }
      ]
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
