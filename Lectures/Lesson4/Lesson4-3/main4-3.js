// function calc(a, b) {
// let result  = a + b;
// return result;
// }
//
// let r1 = calc(10, 20);
// let r2 = calc(20, 30);
// console.log(r1, r2);


// function percent(cash, per) {
//    return cash/100*per;
// }
//
// function tax(sum) {
//     return sum -percent(sum, 20) - percent(sum, 1.5);
// }
// let zp = tax(10000);
// console.log(zp);


function userFilter(users) {
    let filteredUsers = [];
    for (let user of users) {
        if (user.age > 30) {
            // console.log(user);
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let filter = userFilter(users);
console.log(filter);