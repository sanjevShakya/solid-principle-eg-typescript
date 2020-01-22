interface Cleaner {
  wash(): void;
}

interface Feeder {
  feed(): void;
}

interface Petter {
  pet(): void;
}

class Carer implements Cleaner, Feeder {

  wash(): void {

  }

  feed(): void {

  }
}

class AwesomeCarer implements Petter {
  pet(): void {

  }
}


export function initialize() {
  console.log(new AwesomeCarer())
  console.log(new Carer());
}
