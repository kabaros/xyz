var findAlive = require("./find-alive");

test("retrieves only alive writers", function() {
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

  var result = findAlive(persons);

  expect(result).toEqual([
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
    }
  ]);
});
