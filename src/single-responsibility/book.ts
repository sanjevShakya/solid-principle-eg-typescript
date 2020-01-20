export class Book {
  private name: string;
  private author: string;
  private text: string;

  constructor(name: string, author: string, text: string) {
    this.name = name;
    this.author = author;
    this.text = text;
  }

  /* START Getter and Setters */
  public setName(name: string): void {
    this.name = name;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public getName(): string {
    return this.name;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getText(): string {
    return this.text;
  }
  /* END Getter and Setters */

  public replaceWordInText(word: string): string {
    return this.text.replace(word, this.text);
  }

  public isWordInText(word: string): boolean {
    return this.text.includes(word);
  }

  // Violates the single responsibility principle
  // Book does not need to know how to print the text
  // Solution to this is to make a separate class called
  // BookPrinter associated with only printing text
  printTextToConsole(): void {
    console.log('Text::', this.text);
  }
}
