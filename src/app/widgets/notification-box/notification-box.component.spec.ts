import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NotificationBoxComponent } from './notification-box.component';

describe('Component: NotificationBox', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [NotificationBoxComponent]);
  beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([NotificationBoxComponent],
    (component: NotificationBoxComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NotificationBoxComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(NotificationBoxComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [NotificationBoxComponent],
  /* tslint:disable */
  selector: 'test',
  /* tslint:enable */
  template: `
    <app-notification-box></app-notification-box>
  `
})
/* tslint:disable */
class NotificationBoxComponentTestController {
}
/* tslint:enable */

