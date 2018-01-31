import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { GolfCourseService } from '../golf-course-service/golf-course.service';
import { GolfCourse } from '../golf-course-service/golf-course.interface';
import { GolfCourses } from '../golf-course-service/golf-courses.interface';

@Component({
  selector: 'golf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  latLongObject: object;
  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

}
