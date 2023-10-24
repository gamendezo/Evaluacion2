import { TestBed } from '@angular/core/testing';

import { PageProtejidoGuard } from './page-protejido.guard';

describe('PageProtejidoGuard', () => {
  let guard: PageProtejidoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageProtejidoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
