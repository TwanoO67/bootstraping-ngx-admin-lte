import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';

@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html'
})
export class PageNumComponent implements OnInit, OnDestroy {
  public id = 0;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService
  ) {
    // TODO
  }

  public ngOnInit() {
    // when calling routes change
    const idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {
      this.id = data[idkey];
      // changing header
      this.breadServ.setCurrent({
        description: 'This is our ' + this.id + ' page',
        display: true,
        levels: [
          {
            icon: 'dashboard',
            link: ['/'],
            title: 'Home'
          },
          {
            icon: 'clock-o',
            link: ['/page/' + this.id],
            title: 'Page ' + this.id
          }
        ]
      });
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.breadServ.clear();
    this.route = null;
  }
}
