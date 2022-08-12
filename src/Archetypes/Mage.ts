import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static intancesCount = 0;

  constructor(name: string) {
    super(name);

    Mage.intancesCount += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.intancesCount;
  }
}