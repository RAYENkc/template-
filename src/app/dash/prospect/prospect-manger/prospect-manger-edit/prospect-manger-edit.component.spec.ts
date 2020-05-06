import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectMangerEditComponent } from './prospect-manger-edit.component';

describe('ProspectMangerEditComponent', () => {
  let component: ProspectMangerEditComponent;
  let fixture: ComponentFixture<ProspectMangerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectMangerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectMangerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
