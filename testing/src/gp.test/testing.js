// unit test test a single unit of code in isolation
// java tes is code that throws an error when the actual result of test does not match expected result

const {sum, minus} = require("/.math") //import node

let actual;
let expected;

actual = sum(2, 2); // when we add 2 2 is expected to be 4
expected = 4;
//this is called an assertion = waht we write is expected 
if (actual != expected) {
    throw new Error(`${actual} is not equal to ${expected}`)
}
// write multiple assertion to test different use case 
actual = sum(3, 7); 
expected = 10;
//this is called an assertion = waht we write is expected 
if (actual != expected) {
    throw new Error(`${actual} is not equal to ${expected}`)
}
//edge testing is if something could possibly mistake the test for true 2+2 and 2*2

actual = minus(5, 4);
expected = 1;
if(actual != expected) {
    throw new Error (`${actual} is not equal to ${expected}`)
}

actual = minus(20, 4);
expected = 16;
if(actual != expected) {
    throw new Error (`${actual} is not equal to ${expected}`)
}

const assert = (actual, expected) => {
    if (actual !== expected) {
      throw new Error(`${actual} does not equal ${expected}`);
    } else {
      console.log(`${actual} equals ${expected} ✨`);
    }
  };
  
  assert(sum(3, 7), 10);
  assert(sum(42, -9), 33);
  
  assert(subtract(3, 7), -4);
  assert(subtract(42, -9), 51);