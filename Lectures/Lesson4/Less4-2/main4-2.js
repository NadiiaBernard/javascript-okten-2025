// let user1 = {
//     id:1,
//     name: 'kokos',
//     age: 23,
//     status: true
// }
// let user2 = {
//     id:2,
//     name: 'abrikos',
//     age: 23,
//     status: true
// }

function userFactory(id, imya, age, status) {
    let user = {
        id: id,
        name: imya,
        age: age,
        status: status
    }
    return user;
}

let u1 = userFactory(1, 'tomat', 25, true);
let u2 = userFactory(2, 'kokos', 18, false);
let u3 = userFactory(3, 'abrikos', 31, true);
console.log(u1);
console.log(u2);
console.log(u3);