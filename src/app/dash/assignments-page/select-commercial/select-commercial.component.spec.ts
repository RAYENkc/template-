import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCommercialComponent } from './select-commercial.component';

describe('SelectCommercialComponent', () => {
  let component: SelectCommercialComponent;
  let fixture: ComponentFixture<SelectCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
