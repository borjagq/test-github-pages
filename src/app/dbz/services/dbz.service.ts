import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 100
    }, {
      id: uuid(),
      name: 'Goku',
      power: 10000
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 75000
    }
  ];

  public addNewCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: uuid()}
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
