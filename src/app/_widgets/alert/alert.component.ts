import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'alert',
  inputs: ['title', 'text', 'type', 'icon'],
  outputs: ['close'],
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.css']
})
export class AlertComponent implements OnInit {
  public title: string;
  public text: string;
  public type: string;
  public icon: string;
  public close: EventEmitter<AlertComponent> = new EventEmitter<AlertComponent>();

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
