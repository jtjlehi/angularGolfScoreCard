import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { GameService } from '../core/game.service';
import { Observable } from 'rxjs/Observable';
import { Game } from '../services/firebase/game.interface';


@Component({
  selector: 'golf-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  gameId: string;
  game: Game;
  setUp: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gameId = params.game;
      this.gameService.getGameData(this.gameId).subscribe((game) => {
        if (this.setUp) {
          console.log('game', game);
          this.game = game;
          this.setUp = false;
        }
        console.log('game.holes[0].tee_boxes', game.holes[0].tee_boxes);
      });
    });
  }

  getCellWidth(factor?: number) {
    return `${100 / (this.game.numOfHoles + 1)}%`;
  }

}
