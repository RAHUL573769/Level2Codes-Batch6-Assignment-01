2.What is the use of the keyof keyword in TypeScript? Provide an example:

The keyof  creates a union type of all the keys of an object type
interface Student {
  name: string;
  age: number;
}

type PersonKeys = keyof Student;  



