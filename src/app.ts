interface AddFn {
  (a: number, b: number): number;
}

interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase);
  }
}

// let user1: Greetable = {
//   name: 'roh',
//   age: 37,
//   greet(hello: string) {
//     console.log(`${hello}` + this.name);
//   },
// };

// user1.greet('hi');
