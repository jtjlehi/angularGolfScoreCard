import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLoaderComponent } from './course-loader/course-loader.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    path: 'new-card',
    component: CourseLoaderComponent
  },
  {
    path: 'score-card/:game',
    component: ScoreCardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: '',
    redirectTo: '/new-card',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
