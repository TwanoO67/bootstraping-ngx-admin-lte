import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box',
  inputs: ['title', 'type', 'icon'],
  templateUrl: 'box.component.html',
  styleUrls: ['box.component.css']
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
