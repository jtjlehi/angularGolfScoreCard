import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCourseFormComponent } from './find-course-form.component';

describe('FindCourseFormComponent', () => {
  let component: FindCourseFormComponent;
  let fixture: ComponentFixture<FindCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
