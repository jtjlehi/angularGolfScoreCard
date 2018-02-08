import { Injectable, } from '@angular/core';
import { Game } from './game.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirebaseService {

  url: string;

  constructor(private httpClient: HttpClient) { }

  sendGameInfo(gameInfoObject: Game) {
    throw new Error('sendGameInfo not implemented yet');
  }

  getGameInfo() {
    throw new Error('getGameInfo not implemented yet');
  }

}
