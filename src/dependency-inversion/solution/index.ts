import { Windows98Machine } from './windows98Machine';
import { StandardKeyBoard } from './standardKeyboard';

export function initialize() {
  const standardKeyBoard = new StandardKeyBoard();
  const win98Machine = new Windows98Machine(standardKeyBoard);
  win98Machine.start();
}
