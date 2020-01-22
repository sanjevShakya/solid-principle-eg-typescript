import { Rectangle } from "./rectangle";
import { Square } from "./square";

function calculateArea(r: Rectangle) {
  r.breadth = 2;
  r.length = 3;
  console.log(r);
}

export function initialize() {
  calculateArea(new Rectangle());
  calculateArea(new Square());
}
