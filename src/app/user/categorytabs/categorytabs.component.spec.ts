import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorytabsComponent } from './categorytabs.component';

describe('CategorytabsComponent', () => {
  let component: CategorytabsComponent;
  let fixture: ComponentFixture<CategorytabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorytabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorytabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
