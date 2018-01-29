import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// interfaces
import { GolfCourseService } from '../golf-course-service/golf-course.service';
import { GolfCourse } from '../golf-course-service/golf-course.interface';
import { GolfCourses } from '../golf-course-service/golf-courses.interface';
import { TeeType } from '../golf-course-service/tee-types.interface';
import { Holes } from '../golf-course-service/holes.interface';
import { TeeBox } from '../golf-course-service/tee-box.interface';

@Component({
  selector: 'golf-course-loader',
  templateUrl: './course-loader.component.html',
  styleUrls: ['./course-loader.component.scss']
})
export class CourseLoaderComponent implements OnInit {
  // forms
  findCoursesForm: FormGroup;
  chooseCourseForm: FormGroup;
  selectTeeTypeForm: FormGroup;

  golfCourses: GolfCourses;
  golfCourseArray: GolfCourse[];
  course: GolfCourse;
  teeTypes: TeeType[];
  teeType: TeeType;
  holes: Holes[];
  teeHoles: TeeBox[];

  constructor(
    private golfCourseService: GolfCourseService,
    private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.findCoursesForm = this.formBuilder.group({
      zipcode: new FormControl
    });
    this.chooseCourseForm = this.formBuilder.group({

    });
    this.selectTeeTypeForm = this.formBuilder.group({

    });
  }

  searchCourses() {
    this.golfCourseService.getGolfCourses().subscribe(courses => {
      this.golfCourses = courses;
      this.golfCourseArray = courses.courses;
    });
  }

  selectCourse() {
    this.golfCourseService.getGolfCourse(this.golfCourseArray[0].id).subscribe(course => {
      this.course = course.course;
      this.teeTypes = course.course.tee_types;
      this.holes = course.course.holes;
      console.log(this.holes);
    });
  }

  chooseTeeType() {
    throw new Error('chooseTeeType not implemented yet');
  }

  createCard() {
    throw new Error('createCard not implemented yet');
  }

}
