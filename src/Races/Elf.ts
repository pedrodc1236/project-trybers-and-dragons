import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    Elf.instancesCount += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints() :number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}