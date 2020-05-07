import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivageComponent } from './archivage.component';

describe('ArchivageComponent', () => {
  let component: ArchivageComponent;
  let fixture: ComponentFixture<ArchivageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
