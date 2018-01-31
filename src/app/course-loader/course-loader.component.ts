import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// interfaces
import { GolfCourseService } from '../golf-course-service/golf-course.service';
import { GolfCourse } from '../golf-course-service/golf-course.interface';
import { GolfCourses } from '../golf-course-service/golf-courses.interface';
import { TeeType } from '../golf-course-service/tee-types.interface';
import { Holes } from '../golf-course-service/holes.interface';
import { TeeBox } from '../golf-course-service/tee-box.interface';
import { MyErrorStateMatcher } from '../services/mat-matcher.validation';
import { NumberInputValidator } from '../services/number-input.validatation';
import { LatLongService } from '../golf-course-service/lat-long.service';

@Component({
  selector: 'golf-course-loader',
  templateUrl: './course-loader.component.html',
  styleUrls: ['./course-loader.component.scss']
})
export class CourseLoaderComponent implements OnInit {
  // forms
  chooseCourseForm: FormGroup;
  selectTeeTypeForm: FormGroup;

  // findCourseForm
  findCourseForm: FormGroup;
  zipcode: FormControl;
  latLongObj: {lat: number; lng: number};

  golfCourses: GolfCourses;
  golfCourseArray: GolfCourse[];
  course: GolfCourse;
  teeTypes: TeeType[];
  teeType: TeeType;
  holes: Holes[];
  teeHoles: TeeBox[];

  matcher = new MyErrorStateMatcher();

  constructor(
    private golfCourseService: GolfCourseService,
    private latLongService: LatLongService,
    private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.createFindCourseForm();
    this.findLatAndLong(84045);
    this.chooseCourseForm = this.formBuilder.group({

    });
    this.selectTeeTypeForm = this.formBuilder.group({

    });
  }

  createFindCourseForm() {
    this.findCourseForm = this.formBuilder.group({
      zipcode: new FormControl('', [
        Validators.required,
        NumberInputValidator.checkLimit(10000, 99999)
      ])
    });
  }

  findLatAndLong(zipcode: number) {
    this.latLongService.getLatLong(zipcode).subscribe(latObj => {
      this.latLongObj = latObj.results[0].geometry.location;
      console.log(this.latLongObj);
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
