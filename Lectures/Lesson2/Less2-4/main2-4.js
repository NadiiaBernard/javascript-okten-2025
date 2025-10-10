let user1 = {
    id: 1,
    name: 'nadya',
    age: 25,
    skills: ['html', 'js', 'java'],
    boyfriend: {
        name: 'artur',
        age: 31
    }
}

console.log(user1);
console.log(user1.id);
console.log(user1['age']);

console.log(user1.skills[1]);

console.log(user1.boyfriend.name);
