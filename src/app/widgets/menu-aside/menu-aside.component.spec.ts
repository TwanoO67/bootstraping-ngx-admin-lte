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
import { MenuAsideComponent } from './menu-aside.component';

describe('Component: MenuAside', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MenuAsideComponent]);
  beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MenuAsideComponent],
    (component: MenuAsideComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MenuAsideComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MenuAsideComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [MenuAsideComponent],
  selector: 'app-test',
  template: `
    <app-menu-aside></app-menu-aside>
  `
})
/* tslint:disable */
class MenuAsideComponentTestController {
}
/* tslint:enable */

