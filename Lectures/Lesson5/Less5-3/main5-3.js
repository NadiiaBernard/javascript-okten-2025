let user = {
    name: 'vasya',
    age: 25,
    greeting: function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}`
    },
    vitania: (msg) => `${msg} my age is ${user.age}`
}

console.log(user.greeting('hi'));

console.log(user.vitania('hello'));
