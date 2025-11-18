2.What is the use of the keyof keyword in TypeScript? Provide an example:

Ans.The keyof  creates a union type of all the keys of an object type
interface Student {
  name: string;
  age: number;
}

type PersonKeys = keyof Student;  

5.Provide an example of using union and intersection types in TypeScript.

Ans. Union helps to hold values of different types
   Example:
   type age = string | number;

let userAge: age;

userAge = 123;    
userAge = "abc";  

An intersection type combines multiple types into one type
Example:
type Person = {
  name: string;
};

type Employee = {
id: number;
};

type Staff = Person & Employee; 

const staffMember: Staff = {
  name: "",
  id: 201,

};


