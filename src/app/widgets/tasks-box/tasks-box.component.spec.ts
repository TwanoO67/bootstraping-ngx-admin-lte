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
import { TasksBoxComponent } from './tasks-box.component';

describe('Component: TasksBox', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TasksBoxComponent]);
  beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TasksBoxComponent],
    (component: TasksBoxComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TasksBoxComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TasksBoxComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [TasksBoxComponent],
  /* tslint:disable */
  selector: 'test',
  /* tslint:enable */
  template: `
    <app-tasks-box></app-tasks-box>
  `
})
/* tslint:disable */
class TasksBoxComponentTestController {
}
/* tslint:enable */

