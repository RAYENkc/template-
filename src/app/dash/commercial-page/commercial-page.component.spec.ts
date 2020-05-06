import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPageComponent } from './commercial-page.component';

describe('CommercialPageComponent', () => {
  let component: CommercialPageComponent;
  let fixture: ComponentFixture<CommercialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
