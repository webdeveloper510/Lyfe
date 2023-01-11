import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysitrackComponent } from './physitrack.component';

describe('PhysitrackComponent', () => {
  let component: PhysitrackComponent;
  let fixture: ComponentFixture<PhysitrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysitrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysitrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
