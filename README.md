# TypeScript Practice and Blog Project

This repository contains TypeScript problem solutions and simple blog posts about TypeScript concepts.

---

## Files in this Project

### `solutions.ts`

This file contains solutions for 7 TypeScript problems.

Topics covered:

- Array filtering
- String reverse
- Union types
- Type guards
- Generics
- Interfaces
- Classes and inheritance
- Array intersection

---

### `blog-1.md`

This blog explains:

- What Generics are
- How Generics work in TypeScript
- Reusable generic types
- Type safety with Generics

---

### `blog-2.md`

This blog explains:

- `Pick` utility type
- `Omit` utility type
- How to create reusable types
- DRY (Don't Repeat Yourself) principle

---

## Problem Solutions Overview

### Problem 1: Filter Even Numbers

```ts
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}
```

---

### Problem 2: Reverse String

```ts
function reverseString(str: string): string {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
```

---

### Problem 3: Type Guard with Union Type

```ts
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}
```

---

### Problem 4: Generic Function

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

### Problem 5: Interface and Object Extension

```ts
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
```

---

### Problem 6: Class Inheritance

```ts
class Student extends Person {
  grade: string;
}
```

---

### Problem 7: Array Intersection

```ts
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}
```

---

## Technologies Used

- TypeScript
- Markdown

---

## Conclusion

This project helped me practice TypeScript basics and understand important concepts like Generics, utility types, interfaces, and classes.

It also includes simple blog posts written in an easy way for learning and practice.
