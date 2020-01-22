import { Guitar } from "./guitar";

export class SuperCoolGuitarWithFlames extends Guitar {
  private _flameColor: string;

  constructor(model: string, flameColor: string) {
    super(model);
    this._flameColor = flameColor;
  }

  /**
   * Getter flameColor
   * @return {string}
   */
  public get flameColor(): string {
    return this._flameColor;
  }

  /**
   * Setter flameColor
   * @param {string} value
   */
  public set flameColor(value: string) {
    this._flameColor = value;
  }


}

