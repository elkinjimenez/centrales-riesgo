import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarAtencionComponent } from './finalizar-atencion.component';

describe('FinalizarAtencionComponent', () => {
  let component: FinalizarAtencionComponent;
  let fixture: ComponentFixture<FinalizarAtencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarAtencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
