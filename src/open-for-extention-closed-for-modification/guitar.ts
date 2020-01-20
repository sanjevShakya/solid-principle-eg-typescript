export class Guitar {
  private _model: string;

  constructor(model: string) {
    this._model = model;
  }

  /**
   * Getter model
   * @return {string}
   */
  public get model(): string {
    return this._model;
  }

  /**
   * Setter model
   * @param {string} value
   */
  public set model(value: string) {
    this._model = value;
  }

}
