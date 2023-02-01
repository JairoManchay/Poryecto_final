import { TestBed } from '@angular/core/testing';

import { MensajeIntercepService } from './mensaje-intercep.service';

describe('MensajeIntercepService', () => {
  let service: MensajeIntercepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeIntercepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
