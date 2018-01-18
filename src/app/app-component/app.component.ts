import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { GolfCourseService } from '../golf-course-service/golf-course.service';
import { GolfCourse } from '../golf-course-service/golf-course.interface';

@Component({
  selector: 'golf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Golf';
  golfCourses: GolfCourse[];

  constructor(private golfCourseService: GolfCourseService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.golfCourseService.getGolfCourses(4, 5, 5).subscribe((golfCourses: GolfCourse[]) => {
      this.golfCourses = golfCourses;
      console.log(this.golfCourses);
    });
  }

}
