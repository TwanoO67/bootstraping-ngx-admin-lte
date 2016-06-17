import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { App } from '../app/app.component';

beforeEachProviders(() => [App]);

describe('App: Ng2AdminLTE', () => {
  it('should create the app',
      inject([App], (app: App) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-admin-lte works!\'',
      inject([App], (app: App) => {
    expect(app.title).toEqual('ng2-admin-lte works!');
  }));
});
