import { Player as PlayerI } from './player.interface';

export class Player implements PlayerI {

    public hole_scores: number[] = [];
    public total: number = 0;
    public object: PlayerI = {
        name: this.name,
        handicap: this.handicap,
        total: this.total,
        hole_scores: this.hole_scores
    };

    constructor(
        public name: string,
        public handicap: number
    ) { }

    public addHoles(holeCount: number): void {
        console.log('Player.holeCount: ', holeCount);
        for (let count = 0; count < holeCount; count ++) {
            this.hole_scores[count] = 0;
        }
    }

}
