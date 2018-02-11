import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFirestore, DocumentChangeAction, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Game } from '../services/firebase/game.interface';
import { GolfCourse } from '../golf-course-service/golf-course.interface';

@Injectable()
export class GameService {

  gamesCollection: AngularFirestoreCollection<Game>;
  games: Game[];
  gameSnapShot: DocumentChangeAction[];

  constructor(private afs: AngularFirestore) {
    this.gamesCollection = this.afs.collection<Game>('games');
    this.gamesCollection.valueChanges().subscribe(games => {
      this.games = games;
    });
    this.gamesCollection.snapshotChanges().subscribe(snaps => {
      this.gameSnapShot = snaps;
    });
  }

  createNewGame(course: GolfCourse) {
    const gameId = this.afs.createId();
    const game = {
      gameId: gameId,
      numOfHoles: course.hole_count,
      players: [],
      holes: course.holes
    };
    this.gamesCollection.add(game);
    return game;
  }

  getGameData(gameId) {
    throw new Error('getGameData() not implemented');
  }

}
