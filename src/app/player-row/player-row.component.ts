import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../score-card/player.interface';
import { FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'golf-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.scss']
})
export class PlayerRowComponent implements OnInit {

  @Input() player: Player;
  @Input() cellWidth: string;

  holes: FormArray;
  score: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createHolesArray();
    this.holes.valueChanges.subscribe((holes) => {
      console.log('holes form array', holes);
    });
    console.log(this.holes);
  }

  createHolesArray(): void {
    // TODO: add any validators if needed
    this.holes = this.fb.array(this.player.hole_scores);
  }

  getCellWidth() {
    return `${100 / (this.player.hole_scores.length)}%`;
  }

}
