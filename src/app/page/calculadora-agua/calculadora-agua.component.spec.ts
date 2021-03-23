import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraAguaComponent } from './calculadora-agua.component';

describe('CalculadoraAguaComponent', () => {
  let component: CalculadoraAguaComponent;
  let fixture: ComponentFixture<CalculadoraAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
