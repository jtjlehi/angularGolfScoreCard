import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';

@Injectable()
export class FirebaseService {

  url: string;

  constructor(private httpClient: HttpClient) { }

}
