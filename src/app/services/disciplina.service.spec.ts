import { TestBed } from '@angular/core/testing';

import { DisciplinaService } from './disciplina.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DisciplinaService', () => {
  let service: DisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 
    });
    service = TestBed.inject(DisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
