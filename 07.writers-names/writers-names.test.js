var getWritersNames = require("./writers-names");

test("retrieves writers names", function() {
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
      firstName: "Toni",
      lastName: "Morrison",
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

  var result = getWritersNames(persons);

  expect(result).toEqual([
    "Gabriel Garcia Marquez",
    "Zadie Smith",
    "Toni Morrison",
    "Tayib Salih"
  ]);
});
