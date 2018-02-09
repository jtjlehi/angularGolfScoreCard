import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { FirebaseService } from './services/firebase/firebase.service';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightNavComponent,
    LeftNavComponent,
    CourseLoaderComponent,
    ScoreCardComponent,
    PageNotFoundComponent,
    LoginComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    GolfCourseService,
    LatLongService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
