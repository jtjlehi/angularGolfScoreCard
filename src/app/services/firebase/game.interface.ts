import { TeeType } from "../../golf-course-service/tee-types.interface";
import { User } from "./user.interface";
import { Holes } from "../../golf-course-service/holes.interface";

export interface Game {
    gameId: string;
    numOfHoles: number;
    players: {
        id: string;
        holes: number[];
        totalScore: number;
        user: User;
    }[];
    holes: Holes[];
}
