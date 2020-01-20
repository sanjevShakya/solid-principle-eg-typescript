import { SuperCoolGuitarWithFlames } from "./superCoolGuiterWithFlame";
import { Guitar } from "./guitar";

export function initialize() {
  let superCoolGuitar = new SuperCoolGuitarWithFlames('Gibson', 'Blue');
  let normalGuitar = new Guitar('Yamaha');

  console.log('Super Cool Guitar::::', superCoolGuitar);
  console.log('Normal Guitar::::', normalGuitar)
}
