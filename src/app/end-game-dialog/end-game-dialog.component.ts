import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'golf-end-game-dialog',
  templateUrl: './end-game-dialog.component.html',
  styleUrls: ['./end-game-dialog.component.scss']
})
export class EndGameDialogComponent implements OnInit {

  endPhrases: string[] = [
    "It's over",
    "Lets see how you did",
    "The End",
    "Wait it's over?",
    "How'd you do?",
    "Not to shabby"
  ];
  endPhrase: string;

  constructor() { }

  ngOnInit() {
    const randIndex = Math.floor(Math.random() * this.endPhrases.length);
    this.endPhrase = this.endPhrases[randIndex];
  }

}
