export class Rectangle {
  private _length: any;
  private _breadth: any;

  /**
   * Getter length
   * @return {any}
   */
  public get length(): any {
    return this._length;
  }

  /**
   * Getter breadth
   * @return {any}
   */
  public get breadth(): any {
    return this._breadth;
  }

  /**
   * Setter length
   * @param {any} value
   */
  public set length(value: any) {
    this._length = value;
  }

  /**
   * Setter breadth
   * @param {any} value
   */
  public set breadth(value: any) {
    this._breadth = value;
  }
}
