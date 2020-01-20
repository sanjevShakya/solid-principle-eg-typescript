import { Rectangle } from "./rectangle";

export class Square extends Rectangle {

  public set breadth(breadth: any) {
    super.breadth = breadth;
    super.length = breadth;
  }

  public set length(length: any) {
    super.length = length;
    super.breadth = length;
  }
}
