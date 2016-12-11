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
import { UserBoxComponent } from './user-box.component';

describe('Component: UserBox', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UserBoxComponent]);
  beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UserBoxComponent],
    (component: UserBoxComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UserBoxComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UserBoxComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [UserBoxComponent],
  /* tslint:disable */
  selector: 'test',
  /* tslint:enable */
  template: `
    <app-user-box></app-user-box>
  `
})
/* tslint:disable */
class UserBoxComponentTestController {
}
/* tslint:enable */

