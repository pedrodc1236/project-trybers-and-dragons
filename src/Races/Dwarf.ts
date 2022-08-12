import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Dwarf.addInstance();
    this._maxLifePoints = 80;
  }  

  private static addInstance() {
    Dwarf.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}