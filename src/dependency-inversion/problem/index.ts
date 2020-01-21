import { WindowsMachine } from './WindowsMachine';

export function initialize() {
  const winMachine = new WindowsMachine();
  winMachine.start();
}
