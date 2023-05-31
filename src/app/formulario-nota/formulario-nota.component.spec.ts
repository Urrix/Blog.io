import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNotaComponent } from './formulario-nota.component';

describe('FormularioNotaComponent', () => {
  let component: FormularioNotaComponent;
  let fixture: ComponentFixture<FormularioNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioNotaComponent]
    });
    fixture = TestBed.createComponent(FormularioNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
