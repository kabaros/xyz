# README

## What you need to do?

First step is to `fork` this repo to your account, then `clone` it locally.

1. Once you clone locally, open the project in your editor (VS Code), open the terminal and run `npm install`

2. run `npm test` and it should tell you that all 9 test suites failed

3. There are 9 exercises. Each exercise has a `exercise.js` and `exercise.test.js` files. The tests should explain to you what the exercise output should be, but there is also explanation on top of `exercise.js` file. We have written the tests and you need to write code to make the tests pass (turn them from red to green)
    - Write an extra test for each exercise

4. Once you finish the first exercise, push it to your repo, and open a Pull Request

5. Commit often: Every time you finish one exercise, add it, commit it and push it to your repo so that  the PR gets updated.

## DOM Exercise

There is also a DOM exercise where you will use the [Giphy](https://giphy.com/) API to search for trending Gifs and display them in the Browser. Instructions are in `09.dom/index.html`

# How to solve the exercises

The exercise involve a set of tests that we will write code to make them pass. You can run one specific test by specifying a unique part of its file name, for example, you can run the first set of exercises with a watch with `npm test -- opposite --watch` and the `watch` will make it run continuously when you save a file (you can drop the watch if you'd like and just run it manually `npm test -- opposite` will run the tests with `opposite` in the file path).

A good way to work is:

- run the specifc test in *watch* mode, i.e. `npm test -- opposite --watch`
- the tests will be red initially, i.e. tests are failing (make sure they ran and they're failing - red)
- open the code file (next to the test), and start writing code to make the code pass
- every time you save, the tests should run again
- at the end, the tests will pass
- when the test pass, then it is your change to `refactor` the  code - make it better internally without changing the outside behaviour
- close the tests in terminal (`ctrl+c`) then move to the next file (i.e. `npm test -- 01. --watch`)
