let users = [
    {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
    {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
    {skills: ['html', 'js'], id: 3, name: 'anna', age: 26, status: true},
    {skills: ['html', 'mysql', 'mongo'], id: 3, name: 'olya', age: 19, status: false}
];
console.log(users);

let user0 = users[0];
console.log(user0.age);

console.log(users[0].skills[2]);
console.log(users[1]['skills'][1]);