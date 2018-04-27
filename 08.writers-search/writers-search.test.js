var findWriter = require("./find-alive");

var persons = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

test("retrieves writers by name", function() {
  var result = findWriter(persons, "Zadie");

  expect(result).toEqual([
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
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
      age: 41,
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
      age: 41,
      alive: true
    }
  ]);
});
