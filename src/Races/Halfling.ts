import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    
    Halfling.addInstances();
    this._maxLifePoints = 60;
  }

  static addInstances() {
    Halfling.instancesCount += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.instancesCount;
  }
}