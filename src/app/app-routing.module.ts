import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLoaderComponent } from './course-loader/course-loader.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'new-card',
    component: CourseLoaderComponent
  },
  {
    path: 'score-card/:id',
    component: ScoreCardComponent
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
