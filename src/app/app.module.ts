import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { HttpClientModule } from '@angular/common/http';
import { GolfCourseService } from './golf-course-service/golf-course.service';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { RightNavComponent } from './right-nav/right-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { CourseLoaderComponent } from './course-loader/course-loader.component';
import { LatLongService } from './golf-course-service/lat-long.service';
import { ScoreCardComponent } from './score-card/score-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightNavComponent,
    LeftNavComponent,
    CourseLoaderComponent,
    ScoreCardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    GolfCourseService,
    LatLongService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
