import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableentryComponent } from './tableentry.component';

describe('TableentryComponent', () => {
  let component: TableentryComponent;
  let fixture: ComponentFixture<TableentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
