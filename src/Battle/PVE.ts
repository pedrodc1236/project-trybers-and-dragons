import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private _player: Fighter, private arrayEnemys: SimpleFighter[]) { 
    super(_player);
    this.fight();
  }

  helpFunction(i: number): number {
    for (let index = 0; index < 500; index += 1) {
      this._player.attack(this.arrayEnemys[i]);
      if (this.arrayEnemys[i].lifePoints <= 0) {
        return 1;
      }
      this.arrayEnemys[i].attack(this._player);
      if (this._player.lifePoints <= 0) {
        return -1;
      }
    }

    return 0;
  }

  fight(): number {
    for (let i = 0; i < this.arrayEnemys.length; i += 1) {
      const resultBattle = this.helpFunction(i);
      if (resultBattle === -1) return -1;
    }
    return 1;
  }
}