import { Keyboard } from "./keyboard";

export class Windows98Machine {
  private _keyboard : Keyboard;

  constructor(keyboard: Keyboard) {
    this._keyboard = keyboard;
  }

  start(): void {
    this._keyboard.typeWords('hello');
  }
}
