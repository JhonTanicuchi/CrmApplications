import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoEtapasComponent } from './seguimiento-etapas.component';

describe('SeguimientoEtapasComponent', () => {
  let component: SeguimientoEtapasComponent;
  let fixture: ComponentFixture<SeguimientoEtapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoEtapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
