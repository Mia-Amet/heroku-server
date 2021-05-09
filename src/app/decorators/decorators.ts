interface Person {
  name: string;
  sayHello(): void;
}

interface AgedPerson extends Person{
  age: number;
}

// const person: Person = {
//   name: "Dasha"
// };
//
// function addAge(age: number) {
//   return function (person) {
//     return { name: person.name, age }
//   }
// }
//
// const newPerson = addAge(29)(person);

// newPerson { name: "Dasha", age: 29 }



// function AddAge(options: { age: number, city: string }) {
//   return function (targetclass: Person) {
//     return class {
//       name = targetclass.name;
//       age = options.age;
//       city = options.city;
//       sayHello() {
//         console.log('Hello');
//       }
//     }
//   }
// }

// @AddAge({
//   age: 29,
//   city: 'Kiev'
// })
// class Person {
//   public name: string = 'Dasha';
// }
//
// const newPerson = new Person();


class User implements Person {
  public name: string = 'Dasha';

  sayHello() {
    console.log('Hello');
  }
}
