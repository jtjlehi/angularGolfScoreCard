import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { GameService } from '../core/game.service';


@Component({
  selector: 'golf-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  gameId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gameId = params.game;
      this.gameService.getGameData(this.gameId);
    });
  }

}
