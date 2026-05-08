# Understanding Generics in TypeScript

## Introduction

Generics help us write reusable code while still keeping type safety.  
That means one function can work with many data types without losing TypeScript checking.

Here is a simple example of Generic syntax:

```ts
function getData<T>(data: T): T {
  return data;
}

getData("hello");
getData(123);
```

Here `T` means a type.

If we pass a string, TypeScript understands it is a string.  
If we pass a number, it understands it is a number.

This makes the function reusable and type-safe at the same time.

---

## Reusable Type

Generics are very common in React and TypeScript projects.

```ts
type ApiResponse<T> = {
  success: boolean;
  data: T;
};
```

Now we can use different types easily.

### String Data Type

```ts
const user: ApiResponse<string> = {
  success: true,
  data: "Pervez",
};
```

### Number Data Type

```ts
const age: ApiResponse<number> = {
  success: true,
  data: 25,
};
```

---

## Conclusion

Generics make coding easier because we can reuse the same function for different types of data.  
At the same time, TypeScript still checks for errors, so the code stays safer.

That’s why Generics are very useful in TypeScript projects.
