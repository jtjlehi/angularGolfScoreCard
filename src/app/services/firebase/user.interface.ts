export interface User {
    name: string;
    handicap: number;
    gameStats: {
        completedGames: number;
        gamesInProgress: {
            id: string;
        }[];
        avgScore: number;
    };
}
