// ## Problem 1:
// Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// ## Problem 2:
// Write a function `reverseString` that takes a string as input and returns the reversed version of that string.

function reverseString(str: string): string {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

reverseString("typescript")

// ## Problem 3:
// Define a union type `StringOrNumber` and create a function `checkType` that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

// ## Problem 4:
// Write a generic function `getProperty` that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// ## Problem 5:
// Define an interface `Book` with properties `title`, `author`, and `publishedYear`. Create a function `toggleReadStatus` that accepts a `Book` object and returns a new object with an added `isRead` property (boolean), defaulting to `true`.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// ## Problem 6:
// Create a class `Person` with a name and age. Then, create a subclass `Student` that adds a `grade` property. Include a method `getDetails` in the `Student` class that returns a string with the student's name, age, and grade.
class Person {
  name: string
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// ## Problem 7:
// Create a function `getIntersection` that takes two arrays of numbers and returns a new array containing only the elements that are `present in both arrays`.
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        break;
      }
    }
  }

  return result;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

getIntersection(array1, array2)