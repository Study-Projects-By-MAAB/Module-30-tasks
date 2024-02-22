/* Write an arrow function where it will do the following:
a) will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result */

const array1 = [45, 23, 25, 65, 98, 54, 7]
const array2 = [96, 32, 98, 8, 437, 54]

const myFun = (array1, array2) => {
    const newArray = [...array1, ...array2]
    const max = Math.max(...newArray)
    return max
}

console.log(myFun(array1, array2));