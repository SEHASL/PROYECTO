import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcorreoComponent } from './lcorreo.component';

describe('LcorreoComponent', () => {
  let component: LcorreoComponent;
  let fixture: ComponentFixture<LcorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
