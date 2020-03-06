import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcorreoComponent } from './rcorreo.component';

describe('RcorreoComponent', () => {
  let component: RcorreoComponent;
  let fixture: ComponentFixture<RcorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
