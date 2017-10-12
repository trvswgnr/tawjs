import { Constructor } from './constructor';
import { Utilities } from './utilities';
import { DOM } from './dom';
import { Events } from './events';
import classes from './functions/classes';

export class Modules extends classes(Constructor, Utilities, DOM, Events) {}
