import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectviewComponent } from './prospectview.component';

describe('ProspectviewComponent', () => {
  let component: ProspectviewComponent;
  let fixture: ComponentFixture<ProspectviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
