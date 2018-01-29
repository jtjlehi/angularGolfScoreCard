import { Component, OnInit } from '@angular/core';
import { GolfCourseService } from '../golf-course-service/golf-course.service';
import { GolfCourse } from '../golf-course-service/golf-course.interface';
import { GolfCourses } from '../golf-course-service/golf-courses.interface';

@Component({
  selector: 'golf-course-loader',
  templateUrl: './course-loader.component.html',
  styleUrls: ['./course-loader.component.scss']
})
export class CourseLoaderComponent implements OnInit {
  title = 'Golf';
  golfCourses: GolfCourses;
  golfCourseArray: GolfCourse[];
  course: GolfCourse;

  constructor(private golfCourseService: GolfCourseService) { }

  ngOnInit() {
  }

  findCourses() {
    this.golfCourseService.getGolfCourses().subscribe(courses => {
      this.golfCourses = courses;
      this.golfCourseArray = courses.courses;
    });
  }

  selectCourse() {
    this.golfCourseService.getGolfCourse(this.golfCourseArray[0].id).subscribe(course => {
      this.course = course.course;
      console.log(this.course);
    });
  }

  chooseTeeType() {
    throw new Error('chooseTeeType not implemented yet');
  }

  createCard() {
    throw new Error('createCard not implemented yet');
  }

}
