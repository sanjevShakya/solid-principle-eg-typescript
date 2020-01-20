import { StandardKeyBoard } from "./standardKeyboard";


export class WindowsMachine {
  private _keyboard: StandardKeyBoard;

  // problem is both the class StandardKeyBoard and Monitor
  // is coupled.
  constructor() {
    this._keyboard = new StandardKeyBoard();
  }


  /**
   * Getter keyboard
   * @return {StandardKeyBoard}
   */
  public get keyboard(): StandardKeyBoard {
    return this._keyboard;
  }

  /**
   * Setter keyboard
   * @param {StandardKeyBoard} value
   */
  public set keyboard(value: StandardKeyBoard) {
    this._keyboard = value;
  }

  public start() : void {
    this._keyboard.typeWords('hello from DI problem...')
  }
}
