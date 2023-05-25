import { TestBed } from '@angular/core/testing';

import { CartDisplayService } from './cart-display.service';

describe('CartDisplayService', () => {
  let service: CartDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
