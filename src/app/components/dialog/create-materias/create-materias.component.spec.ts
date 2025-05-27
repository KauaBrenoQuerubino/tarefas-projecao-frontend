import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMateriasComponent } from './create-materias.component';

describe('CreateMateriasComponent', () => {
  let component: CreateMateriasComponent;
  let fixture: ComponentFixture<CreateMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
