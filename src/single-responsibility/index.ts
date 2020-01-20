import { Book } from './book';
import { BookPrinter } from './bookPrinter';

/**
 * Single Responsiblity Principle
 *
 * Testing – A class with one responsibility will have far fewer test cases
 * Lower coupling – Less functionality in a single class will have fewer dependencies
 * Organization – Smaller, well-organized classes are easier to search than monolithic ones
 */

export function initialize() {
  let shirishKoFool = new Book('Shirish Ko Fool', 'Parijat', 'Awesome Book');
  let bookPrinter = new BookPrinter();

  bookPrinter.printToConsole(shirishKoFool.getAuthor());

  bookPrinter.printToConsole(shirishKoFool.getText());

  shirishKoFool.setText('Not only awesome but taught in MIT literature class.')

  bookPrinter.printToConsole(shirishKoFool.getText());
}
