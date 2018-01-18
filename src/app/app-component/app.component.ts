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
    this.golfCourseService.getGolfCourses(4, 5, 5).subscribe((golfCourses: GolfCourses) => {
      this.golfCourses = golfCourses;
      this.golfCourseArray = golfCourses.courses;
      this.golfCourseArray.forEach((currentCourse, index, array) => {
        this.golfCourseService.getGolfCourse(currentCourse.id).subscribe((course: GolfCourse) => {
          this.course = course;
          console.log(course);
        });
      });
    });
  }

}
