var negativeNumber = require("./negative-number");

test("returns -20 if passed -20", function() {
  var number = -20;
  var opposite = negativeNumber(-20);
  expect(opposite).toEqual(-20);
});

test("returns -40 if passed 40", function() {
  var number = 40;
  var opposite = negativeNumber(-40);

  expect(opposite).toEqual(-40);
});
