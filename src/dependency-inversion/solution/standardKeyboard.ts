import { Keyboard } from "./keyboard";

export class StandardKeyBoard implements Keyboard {
  public typeWords(word : string) : void {
    console.log('typing....', word);
  }
}
