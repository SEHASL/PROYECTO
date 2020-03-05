import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcorreoComponent } from './ncorreo.component';

describe('NcorreoComponent', () => {
  let component: NcorreoComponent;
  let fixture: ComponentFixture<NcorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
