import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-widget',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './menu-widget.component.html'
})
export class MenuWidgetComponent implements OnInit, OnChanges {
  public label = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
