import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPageDialogComponent } from './dash-page-dialog.component';

describe('DashPageDialogComponent', () => {
  let component: DashPageDialogComponent;
  let fixture: ComponentFixture<DashPageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashPageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
