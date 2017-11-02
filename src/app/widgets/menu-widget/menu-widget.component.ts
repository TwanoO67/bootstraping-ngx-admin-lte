import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-widget',
  templateUrl: './menu-widget.component.html',
  styleUrls: ['./menu-widget.component.css']
})
export class MenuWidgetComponent implements OnInit {

  constructor() { }

  public label = '';

  ngOnInit() {
  }

}
