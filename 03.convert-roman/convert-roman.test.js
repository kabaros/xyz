const convertToRoman = require("./convert-roman");

test("converts 1", function() {
  var result = convertToRoman(1);
  expect(result).toEqual("I");
});

test("converts 2", function() {
  var result = convertToRoman(2);
  expect(result).toEqual("II");
});

test("converts 3", function() {
  var result = convertToRoman(3);
  expect(result).toEqual("III");
});

test("converts 4", function() {
  var result = convertToRoman(4);
  expect(result).toEqual("IV");
});

test("converts 5", function() {
  var result = convertToRoman(5);
  expect(result).toEqual("V");
});

test("converts 6", function() {
  var result = convertToRoman(6);
  expect(result).toEqual("VI");
});

test("converts 7", function() {
  var result = convertToRoman(7);
  expect(result).toEqual("VII");
});

test("converts 8", function() {
  var result = convertToRoman(8);
  expect(result).toEqual("VIII");
});

test("converts 9", function() {
  var result = convertToRoman(9);
  expect(result).toEqual("IX");
});

test("converts 10", function() {
  var result = convertToRoman(10);
  expect(result).toEqual("X");
});
