import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [GameService]
})
export class CoreModule { }
