import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyfeComponent } from './lyfe.component';

describe('LyfeComponent', () => {
  let component: LyfeComponent;
  let fixture: ComponentFixture<LyfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
