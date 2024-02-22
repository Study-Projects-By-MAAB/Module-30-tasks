// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const arrow = (num1, num2, num3) => num1 * num2 * num3
console.log(arrow(3, 4, 5));

// -------------------------------------------------------
// 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(sentence);

// -------------------------------------------------------
// 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.


const myFun = (params1, params2 = 40) => params1 + params2
console.log(myFun(5));