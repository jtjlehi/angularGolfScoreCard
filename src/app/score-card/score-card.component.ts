import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { GameService } from '../core/game.service';
import { Observable } from 'rxjs/Observable';
import { Game } from '../services/firebase/game.interface';
import { MatDialog } from '@angular/material';

import { AddPlayerDialogComponent } from '../add-player-dialog/add-player-dialog.component';
import { Player } from './player.interface';
import { Player as PlayerClass } from './player.class';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';


@Component({
  selector: 'golf-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  gameId: string;
  game: Game;
  setUp: boolean = true;
  newPlayerName: string;
  newPlayerHandicap: string;
  playersCollection: AngularFirestoreCollection<Player>;
  players: Player[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private dialog: MatDialog,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gameId = params.game;
      this.gameService.getGameData(this.gameId).subscribe((game) => {
        if (this.setUp) {
          this.game = game;
          this.setUp = false;
        }
      });
      this.playersCollection = this.afs.collection('games').doc(this.gameId).collection<Player>('players');
      this.playersCollection.valueChanges().subscribe(players => {
          this.players = players;
          console.log(this.players);
      });
    });
  }

  getCellWidth(factor?: number): string {
    return `${100 / (this.game.numOfHoles)}%`;
  }

  addPlayer() {
    this.newPlayerName = '';
    this.newPlayerHandicap = '0';
    const dialogRef = this.dialog.open(AddPlayerDialogComponent, {
      data: {
        name: this.newPlayerName,
        handicap: this.newPlayerHandicap
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newPlayerName = result.name;
        this.newPlayerHandicap = result.handicap;
        const newPlayer: PlayerClass = new PlayerClass(result.name, result.handicap, {afs: this.afs, gameId: this.gameId});
        newPlayer.addHoles(this.game.holes.length);
        newPlayer.addToFirebase();
      }
    });
  }

  endGame() {
    const dialogRef = this.dialog.open(EndGameDialogComponent);
  }

}
