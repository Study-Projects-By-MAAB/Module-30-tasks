/* Write an arrow function where it will do the following:

a) It will take an array where the array elements will be the name of your friends
b) Check if the length of each element is even, push elements with even length to a new array and return the result */

const friends = ['shakil', 'sazzad', 'hasan', 'pappu', 'shahin', 'emon', 'ripon', 'topon']

const myFun = friendsArray => {
    let even = []
    for (const friend of friendsArray) {
        if (friend.length % 2 == 0) {
            even.push(friend)
        }
    }
    return even
}
console.log(myFun(friends));