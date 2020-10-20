import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerSalleComponent } from './controller-salle.component';

describe('ControllerSalleComponent', () => {
  let component: ControllerSalleComponent;
  let fixture: ComponentFixture<ControllerSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
