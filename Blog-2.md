# Understanding Pick and Omit in TypeScript

## Introduction

`Pick` and `Omit` are utility types in TypeScript.  
They help us create new types from an existing type without writing the same code again and again.

This keeps our code DRY, which means **Don't Repeat Yourself**.

---

## Master Interface

First, we can create one main interface.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

This is the master interface.  
Now we can create smaller types from it using `Pick` and `Omit`.

---

## Using Pick

`Pick` is used when we only need some properties from the main interface.

```ts
type UserPreview = Pick<User, "id" | "name" | "email">;
```

Now `UserPreview` only has `id`, `name`, and `email`.

```ts
const userPreview: UserPreview = {
  id: 1,
  name: "Pervez",
  email: "pervez@example.com",
};
```

So we do not need to write a new interface again.

---

## Using Omit

`Omit` is used when we want to remove some properties from the main interface.

For example, we may not want to send the password in frontend data.

```ts
type SafeUser = Omit<User, "password">;
```

Now `SafeUser` has everything except `password`.

```ts
const safeUser: SafeUser = {
  id: 1,
  name: "Pervez",
  email: "pervez@example.com",
  role: "admin",
};
```

This makes the code safer and cleaner.

---

## How It Keeps Code DRY

Without `Pick` and `Omit`, we may write many similar interfaces.

```ts
interface UserPreview {
  id: number;
  name: string;
  email: string;
}

interface SafeUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
```

This creates duplicate code.

But with `Pick` and `Omit`, we use the main `User` interface and create smaller types from it.

```ts
type UserPreview = Pick<User, "id" | "name" | "email">;
type SafeUser = Omit<User, "password">;
```

So if the main `User` interface changes, the other types update automatically.

---

## Conclusion

`Pick` and `Omit` help us create special versions of a type without repeating code.  
`Pick` selects only the properties we need, and `Omit` removes the properties we do not need.

Because of this, our code becomes cleaner, easier to maintain, and follows the DRY rule.
