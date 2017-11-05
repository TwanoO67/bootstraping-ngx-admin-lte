import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header-widget',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header-widget.component.html'
})
export class HeaderWidgetComponent implements OnInit, OnChanges {
  public label = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
