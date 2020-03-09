import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcorreoComponent } from './vcorreo.component';

describe('VcorreoComponent', () => {
  let component: VcorreoComponent;
  let fixture: ComponentFixture<VcorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
