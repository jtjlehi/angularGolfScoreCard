import { TeeType } from "../../golf-course-service/tee-types.interface";
import { User } from "./user.interface";
import { Holes } from "../../golf-course-service/holes.interface";

export interface Game {
    gameId: string;
    numOfHoles: number;
    holes: Holes[];
    teeTypes: TeeType[];
}
