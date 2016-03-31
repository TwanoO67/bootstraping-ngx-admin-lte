import { Component, Input, Output, OnInit, EventEmitter } from 'angular2/core';
import { NgIf, NgClass } from 'angular2/common';

@Component({
  selector: 'alert',
  templateUrl: 'app/_widgets/alert/alert.html',
  inputs: ['title', 'text', 'type', 'icon'],
  outputs: ['close'],
  directives: [NgIf, NgClass]
})
export class AlertComponent implements OnInit {
  public title: string;
  public text: string; 
  public type: string;
  public icon: string;
  public close: EventEmitter = new EventEmitter();

  private classes: Array<string> = ['alert'];
  private iconClasses: Array<string> = ['icon', 'fa'];
  private closed: boolean;
  private hasIcon: boolean;

  ngOnInit() {
    if (this.type) {
      this.classes.push(`alert-${this.type}`);
    }

    if (this.icon) {
      this.hasIcon = true;
      this.iconClasses.push(`fa-${this.icon}`);
    }
  }

  onClose() {
    this.close.emit(this);
    this.closed = true;
  }
}