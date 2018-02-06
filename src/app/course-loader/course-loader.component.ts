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
import { MatStepper } from '@angular/material';

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
  latLongObj: {latitude: number; longitude: number, radius: number};

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
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFindCourseForm();
    this.createChooseCourseForm();
    this.selectTeeTypeForm = this.formBuilder.group({

    });
  }

  matGoForward(stepper: MatStepper) {
    stepper.next();
  }

  // form creation

  createFindCourseForm() {
    this.findCourseForm = this.formBuilder.group({
      zipcode: new FormControl('', [
        Validators.required,
        NumberInputValidator.checkLimit(10000, 99999)
      ])
    });
  }

  createChooseCourseForm() {
    this.chooseCourseForm = this.formBuilder.group({
      course: new FormControl('', [
        Validators.required
      ])
    });
  }

  // find course step

  findLatAndLong(zipcode: number, stepper: MatStepper) {
    this.latLongService.getLatLong(zipcode).subscribe(latObj => {
      this.latLongObj = {
        latitude: latObj.results[0].geometry.location.lat,
        longitude: latObj.results[0].geometry.location.lng,
        radius: 10
      };
      this.searchCourses(this.latLongObj, stepper);
    });
  }

  searchCourses(latLongObj: {latitude: number, longitude: number, radius: number}, stepper: MatStepper) {
    this.golfCourseService.getGolfCourses(latLongObj).subscribe(courses => {
      this.golfCourses = courses;
      this.golfCourseArray = courses.courses;
      console.log('this.golfCourseArray: ', this.golfCourseArray);
      this.matGoForward(stepper);
    });
  }

  // select course step

  selectCourse(selectedCourse) {
    console.log(selectedCourse);
    this.golfCourseService.getGolfCourse(selectedCourse.id).subscribe(returnCourse => {
      this.course = returnCourse.course;
      this.teeTypes = returnCourse.course.tee_types;
      this.holes = returnCourse.course.holes;
      console.log(this.holes);
    });
  }

  // choose tee type step

  chooseTeeType() {
    throw new Error('chooseTeeType not implemented yet');
  }

  // create card step

  createCard() {
    throw new Error('createCard not implemented yet');
  }

}
