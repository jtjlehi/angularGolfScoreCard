import { TeeType } from "../../golf-course-service/tee-types.interface";
import { User } from "./user.interface";

export interface Game {
    numOfHoles: number;
    players: {
        id: string;
        holes: number[];
        totalScore: number;
        user: User;
    }[];
    tee_types: string[];
    tee_colors: string[];
}
