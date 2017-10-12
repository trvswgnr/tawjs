import { Constructor } from './constructor';
import { Utilities } from './utilities';
import { DOM } from './dom';

export class Modules extends Utilities(DOM(Constructor)) {}
