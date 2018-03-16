import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../score-card/player.interface';
import { FormArray, FormControl, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'golf-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.scss']
})
export class PlayerRowComponent implements OnInit {

  @Input() player: Player;
  @Input() cellWidth: string;
  @Input() gameId: string;

  holes: FormArray;
  holeArray: number[];
  totalScore: number = 0;
  playerDoc: AngularFirestoreDocument<Player>;

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.playerDoc = this.afs.doc<Player>(`games/${this.gameId}/players/${this.player.id}`);
    this.createHolesArray();
    this.playerDoc.valueChanges().subscribe((player) => {
      this.player = player;
    });
  }

  createHolesArray(): void {
    // TODO: add any validators if needed
    this.holes = this.fb.array(this.player.hole_scores);
    this.holeArray = this.player.hole_scores;
    this.holes.controls.forEach((holeControl: FormControl, holeNumber: number) => {
      holeControl.valueChanges.subscribe((value) => {
        // test and set values to be added and subtracted
        const valueAdded = holeControl.value ? holeControl.value : 0;
        const valueSubtracted = this.player.hole_scores[holeNumber] ? this.player.hole_scores[holeNumber] : 0;
        // change total score value
        this.player.total = this.player.total - valueSubtracted + valueAdded;
        // set this.holeArray so it holds the right value.
        this.player.hole_scores[holeNumber] = holeControl.value ? holeControl.value : 0;
        this.playerDoc.set(this.player);
      });
    });
  }

  getCellWidth() {
    return `${100 / (this.player.hole_scores.length)}%`;
  }

}
