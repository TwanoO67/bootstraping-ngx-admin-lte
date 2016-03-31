import { Component, Input, OnInit } from 'angular2/core';

@Component({
  selector: 'box',
  inputs: ['title', 'type', 'icon'],
  templateUrl: 'app/_widgets/box/box.html'
})
export class BoxComponent implements OnInit {
  public title: string;
  public icon: string;
  public type: string = 'default';

  private classes: Array<string> = ['box'];
  private iconClasses: Array<string> = ['fa'];
  private hasIcon: boolean;

  ngOnInit() {
    if (this.type) {
      this.classes.push(`box-${this.type}`);
    }

    if (this.icon) {
      this.hasIcon = true;
      this.iconClasses.push(`fa-${this.icon}`);
    }
  }
}
