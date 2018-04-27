var findWriter = require("./writers-search");

var persons = [
  {
    firstName: "Gabriel Garcia",
    lastName: "Marquez",
    occupation: "writer",
    age: 87,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 42,
    alive: true
  },
  {
    firstName: "Toni Morrison",
    lastName: "Austen",
    occupation: "writer",
    age: 87,
    alive: true
  },
  {
    firstName: "Tayib",
    lastName: "Salih",
    occupation: "writer",
    age: 80,
    alive: false
  }
];

test("retrieves writers by name", function() {
  var result = findWriter(persons, "Zadie");

  expect(result).toEqual([
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 42,
      alive: true
    }
  ]);
});

test("retrieves writers by name regardless of case", function() {
  var result = findWriter(persons, "ZADIE");

  expect(result).toEqual([
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 42,
      alive: true
    }
  ]);
});

test("retrieves writers by last name or first name", function() {
  var result = findWriter(persons, "smith");

  expect(result).toEqual([
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 42,
      alive: true
    }
  ]);
});
