import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html'
})
export class PageNumComponent implements OnInit, OnDestroy {
  private id: number = 0;
  private sub: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    // when calling routes change
    let idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {
      this.id = data[idkey];
    });
  }
  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
