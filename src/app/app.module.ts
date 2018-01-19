import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { HttpClientModule } from '@angular/common/http';
import { GolfCourseService } from './golf-course-service/golf-course.service';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { RightNavComponent } from './right-nav/right-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    GolfCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
