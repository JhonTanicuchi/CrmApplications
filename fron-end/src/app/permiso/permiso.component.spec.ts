import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoComponent } from './permiso.component';

describe('PermisoComponent', () => {
  let component: PermisoComponent;
  let fixture: ComponentFixture<PermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
