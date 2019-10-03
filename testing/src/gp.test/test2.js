const assert = require('assert')
const { sum, minus } = require('./math')

actual = sum(1, 1)
expected = 2;
assert.strictEqual(actual, expected);

actual = minus(1, 1)
expected = 2;
assert.strictEqual(actual, expected);

//built in node function for the handwritten function


//-----------------------------------------
//this is under the hood for testing libraries like jest

const test = (title, cb) => {
    try{
        cb();
        console.log(`${title}`);
    } catch(err) {
        console.error(`${title}`)
        console.error(err)
    }
}
const expect = (actual) => {
    return {
       toBe:(expected) => {
        if (actual != expected) {
            throw new Error(`${actual} is not equal to ${expected}`)
        }
       } 
    }
}
//this is the cb fnct \/
test('sum returns the sum of 2 numbers', () =>{
    actual = sum(3, 7); 
    expected = 10;
    expect(actual).toBe(expected)
    //call fnc expect with actual added arg > ca;l fnc tobewith expected arg  run fnc   
})
//^ this is like what we write in jest testing