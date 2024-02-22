/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements */

const numbers = [5, 9, 54, 6, 4, 6, 3]

const myFun = array => {
    let sum = 0;
    for (const number of array) {
        const square = number * number
        sum = sum + square
    }
    return average = sum / array.length
}
console.log(myFun(numbers));