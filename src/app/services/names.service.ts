import { Injectable } from '@angular/core';
import { NameObj } from './nameObj.class';

@Injectable()
export class NamesService {

  private _names: NameObj[] = [];

  constructor() { }

  // if name.id doesn't exist nameObj is made and added to the _names array.
  // if name.id does exist then the name of the id is changed.
  public changeName(name: string, id: string): void {
    const nameIndex: number = this._findIndexById(id);
    if (nameIndex === -1) {
      this._names.push(new NameObj(name, id));
    } else {
      this._names[nameIndex].changeName(name);
    }
  }

  public getMatchingNames(name: string) {
    const matches = this._names.filter((nameObj) => {
      return nameObj.name === name;
    });
    matches.forEach((nameObj: {name: string, id: string, count: number}, index) => {
      const nameIndex = this._findIndexById(nameObj.id);
      this._names[nameIndex].changeCount(index + 1);
    });
  }

  public findNameById(id: string): NameObj {
    const nameIndex = this._findIndexById(id);
    return this._names[nameIndex];
  }

  private _findIndexById(id: string): number {
    return this._names.findIndex((value) => {
      return id === value.id;
    });
  }
}
