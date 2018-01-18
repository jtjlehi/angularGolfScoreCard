// Angular defined imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Golf course interface
import { GolfCourse } from './golf-course.interface';
import { GolfCourses } from './golf-courses.interface';

@Injectable()
export class GolfCourseService {

  url: string = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private httpClient:  HttpClient) { }

  getGolfCourses(latitude: number, longitude: number, radius: number): Observable<GolfCourses> {
    return this.httpClient.post<GolfCourses>(this.url, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 10
    });
  }

  getGolfCourse(id: number): Observable<GolfCourse> {
    return this.httpClient.get<GolfCourse>(`${this.url}/${id}`);
  }

}
