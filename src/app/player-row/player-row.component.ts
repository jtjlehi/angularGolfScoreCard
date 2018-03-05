import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../score-card/player.interface';

@Component({
  selector: 'golf-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.scss']
})
export class PlayerRowComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }

}
