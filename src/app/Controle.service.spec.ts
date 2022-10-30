/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ControleService } from './Controle.service';

describe('Service: Controle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControleService]
    });
  });

  it('should ...', inject([ControleService], (service: ControleService) => {
    expect(service).toBeTruthy();
  }));
});
