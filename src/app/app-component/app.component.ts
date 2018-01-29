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
  title = 'Golf';
  golfCourses: GolfCourses;
  golfCourseArray: GolfCourse[];
  course: GolfCourse;

  constructor(private golfCourseService: GolfCourseService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.golfCourseService.getGolfCourses().subscribe(courses => {
      this.golfCourses = courses;
      this.golfCourseArray = courses.courses;
    });
  }

  pullCourse() {
    this.golfCourseService.getGolfCourse(this.golfCourseArray[0].id).subscribe(course => {
      this.course = course.course;
    });
  }

}
