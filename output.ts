interface IFunction {
  (a: string | number | boolean): string | number | boolean | undefined;
}
const formatValue: IFunction = (a) => {
  if (typeof a === "string") {
    const upperString = a.toUpperCase();
    return upperString;
  } else if (typeof a === "number") {
    const multipliedNumber = a * 10;
    return multipliedNumber;
  } else if (typeof a === "boolean") {
    const reversedNumber = !a;
    return reversedNumber;
  } else {
    console.log("The input number is not a string ,number or boolean");
  }
};

interface IFunction2 {
  (value1: string | any[] | undefined): number | undefined;
}
const getLength: IFunction2 = (value1) => {
  if (typeof value1 === "string") {
    const lengthString = value1.length;
    return lengthString;
  } else if (Array.isArray(value1)) {
    const lengthArray = value1.length;
    return lengthArray;
  } else {
    console.log("Invalid Output");
  }
};

class Person {
  name: string;
  age: number;
  constructor(nameGiven: string, ageGiven: number) {
    this.name = nameGiven;
    this.age = ageGiven;
  }
  getDetails() {
    const formattedString = `Name: ${this.name}, Age: ${this.age}  `;
    return formattedString;
  }
}

interface BooksArray {
  title: string;
  rating: number;
}

function filterByRating(items: BooksArray[]): BooksArray[] {
  return items.filter((item) => item.rating >= 4);
}

interface Users {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
[];

interface IFunction3 {
  (usersArrayInput: Users[]): Users[];
}

const filterActiveUsers: IFunction3 = (usersArrayInput) => {
  return usersArrayInput.filter((user) => user.isActive);
};

interface Book3 {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

interface IFunction4 {
  (book3: Book3): string | undefined;
}

const printBookDetails: IFunction4 = (book3) => {
  const isAvailable = book3.isAvailable ? "Yes" : "No";

  const message = `Title: ${book3.title}, Author: ${book3.author}, Published: ${book3.publishedYear}, Available: ${isAvailable}`;
  return message;
};
