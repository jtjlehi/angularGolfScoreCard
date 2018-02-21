import { Player as PlayerI } from './player.interface';

export class Player implements PlayerI {

    public hole_scores: number[];
    public total: number = 0;

    constructor(
        public name: string,
        public handicap: number
    ) { }

}