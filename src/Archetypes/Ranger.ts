import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private _energytype: EnergyType;
  static intancesCount = 0;

  constructor(name: string) {
    super(name);

    this._energytype = 'stamina';
    Ranger.intancesCount += 1;
  }

  get energyType(): EnergyType {
    return this._energytype;
  }

  static createdArchetypeInstances(): number {
    return this.intancesCount;
  }
}