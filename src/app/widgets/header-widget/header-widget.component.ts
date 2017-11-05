import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header-widget',
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
