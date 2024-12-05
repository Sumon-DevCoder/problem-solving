// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const people = [
  { name: "safia", age: 25, gender: "female" },
  { name: "sumon", age: 30, gender: "male" },
  { name: "jhankhar mahbub", age: 35, gender: "male" },
  { name: "aklima", age: 28, gender: "female" },
  { name: "hamid", age: 40, gender: "male" },
];

const withOutFemale = (arr) => {
  const withOutFemaleArray = arr.filter((person) => person.gender !== "female");
  const personName = withOutFemaleArray.map((person) => person.name);
  return personName;
};

withOutFemale(people);

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
const books = [
  { title: "hablu programmer", author: "Jhankhar mahbub", year: 2016 },
  {
    title: "Peromoi life a peracitamol",
    author: "Jhankhar mahbub",
    year: 2018,
  },
  { title: "The beautiful life", author: "Anisur islam", year: 2020 },
  {
    title: "the power of your subsconcious mind",
    author: "jusif merfi",
    year: 2004,
  },
];

function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

getBookTitles(books);

// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const composedFunction = (num) => num * num * 2 + 5;

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2019 },
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
