import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPosteComponent } from './details-poste.component';

describe('DetailsPosteComponent', () => {
  let component: DetailsPosteComponent;
  let fixture: ComponentFixture<DetailsPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
