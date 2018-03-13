import { Player as PlayerI } from './player.interface';
import { AngularFirestore } from 'angularfire2/firestore';

export class Player {

    public hole_scores: number[] = [];
    public total: number = 0;
    public object: PlayerI = {
        name: this.name,
        handicap: this.handicap,
        total: this.total,
        hole_scores: this.hole_scores,
        id: ''
    };

    constructor(
        public name: string,
        public handicap: number,
        private firebaseInfo: {
            afs: AngularFirestore,
            gameId: string
        }
    ) { }

    public addHoles(holeCount: number): void {
        console.log('Player.holeCount: ', holeCount);
        for (let count = 0; count < holeCount; count ++) {
            this.hole_scores[count] = 0;
        }
    }

    addToFirebase() {
        this.object.id = this.firebaseInfo.afs.createId();
        this.firebaseInfo.afs.collection('games').doc(this.firebaseInfo.gameId).collection('players').doc(this.object.id).set(this.object);
    }

}
