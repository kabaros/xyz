var getFullName = require("./full-name");

test("full name for Etza Hernandez", function() {
  var result = getFullName("Etza", "Hernandez", "Her Majesty");
  expect(result).toEqual("Her Majesty Etza Hernandez");
});

test("full name for Mo Salah", function() {
  var result = getFullName("Mo", "Salah", "King");
  expect(result).toEqual("King Mo Salah");
});

test("full name for Mozafar", function() {
  var result = getFullName("Mozafar", "Haider", "Best Mentor");
  expect(result).toEqual("Best Mentor Mozafar Haider");
});

test("full name for Mimi", function() {
  var result = getFullName("Mimi", "Popa", "Her Excellency");
  expect(result).toEqual("Her Excellency Mimi Popa");
});
