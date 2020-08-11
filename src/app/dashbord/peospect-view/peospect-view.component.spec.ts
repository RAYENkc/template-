import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeospectViewComponent } from './peospect-view.component';

describe('PeospectViewComponent', () => {
  let component: PeospectViewComponent;
  let fixture: ComponentFixture<PeospectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeospectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeospectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
