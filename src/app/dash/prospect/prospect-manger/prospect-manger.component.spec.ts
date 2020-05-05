import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectMangerComponent } from './prospect-manger.component';

describe('ProspectMangerComponent', () => {
  let component: ProspectMangerComponent;
  let fixture: ComponentFixture<ProspectMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
