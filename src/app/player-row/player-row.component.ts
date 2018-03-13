import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../score-card/player.interface';
import { FormArray, FormControl, FormBuilder } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'golf-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.scss']
})
export class PlayerRowComponent implements OnInit {

  @Input() player: Player;
  @Input() cellWidth: string;

  holes: FormArray;
  holeArray: number[];
  totalScore: number = 0;

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.createHolesArray();
  }

  createHolesArray(): void {
    // TODO: add any validators if needed
    this.holes = this.fb.array(this.player.hole_scores);
    this.holeArray = this.player.hole_scores;
    this.holes.controls.forEach((holeControl: FormControl, holeNumber: number) => {
      holeControl.valueChanges.subscribe((value) => {
        // test and set values to be added and subtracted
        const valueAdded = holeControl.value ? holeControl.value : 0;
        const valueSubtracted = this.holeArray[holeNumber] ? this.holeArray[holeNumber] : 0;
        // change to total score value
        this.totalScore = this.totalScore - valueSubtracted + valueAdded;
        // set this.holeArray so it holds the right value.
        this.holeArray[holeNumber] = holeControl.value;
      });
    });
  }

  getCellWidth() {
    return `${100 / (this.player.hole_scores.length)}%`;
  }

}
