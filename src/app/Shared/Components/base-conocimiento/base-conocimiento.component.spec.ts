import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConocimientoComponent } from './base-conocimiento.component';

describe('BaseConocimientoComponent', () => {
  let component: BaseConocimientoComponent;
  let fixture: ComponentFixture<BaseConocimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseConocimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
