import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidClientComponent } from './valid-client.component';

describe('ValidClientComponent', () => {
  let component: ValidClientComponent;
  let fixture: ComponentFixture<ValidClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
