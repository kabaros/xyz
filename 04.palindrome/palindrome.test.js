var palindrome = require("./palindrome");

test("madam is a palindrome", function() {
  var result = palindrome("madam");
  expect(result).toEqual(true);
});

test("racecar is a palindrome", function() {
  var result = palindrome("racecar");
  expect(result).toEqual(true);
});

test("nodom is NOT a palindrome", function() {
  var result = palindrome("nodom");
  expect(result).toEqual(false);
});
