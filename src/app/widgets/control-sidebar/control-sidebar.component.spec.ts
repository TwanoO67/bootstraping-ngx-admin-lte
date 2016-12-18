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
import { AppHeaderComponent } from './app-header.component';

describe('Component: AppHeader', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AppHeaderComponent]);
  beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AppHeaderComponent],
    (component: AppHeaderComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AppHeaderComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AppHeaderComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [AppHeaderComponent],
  selector: 'app-test',
  template: `
    <app-header></app-header>
  `
})
/* tslint:disable */
class AppHeaderComponentTestController {
}
/* tslint:enable */
