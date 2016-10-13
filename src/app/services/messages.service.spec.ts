import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MessagesService } from './messages.service';

describe('Messages Service', () => {
  beforeEachProviders(() => [MessagesService]);

  it('should ...',
      inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});
