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
import { MessagesBoxComponent } from './messages-box.component';

describe('Component: MessagesBox', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MessagesBoxComponent]);
  beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MessagesBoxComponent],
    (component: MessagesBoxComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MessagesBoxComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MessagesBoxComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [MessagesBoxComponent],
  /* tslint:disable */
  selector: 'test',
  /* tslint:enable */
  template: `
    <app-messages-box></app-messages-box>
  `
})
/* tslint:disable */
class MessagesBoxComponentTestController {
}
/* tslint:enable */
