var getWritersNames = require("./writers-names");

test("retrieves writers names", function() {
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

  var result = getWritersNames(persons);

  expect(result).toEqual([
    "Virginia Woolf",
    "Zadie Smith",
    "Jane Austen",
    "bell hooks"
  ]);
});
