// function asd() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner;
// }
//
// let foobar = asd();
// console.log(foobar());
// console.log(foobar());
// console.log(foobar());


// let user = {name: 'nadya', age: 25};

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        }
    }

}

let builer = userBuilder('sasha', 35);
console.log(builer);
console.log(builer.getAge());
console.log(builer.getName());
builer.setAge(37);
console.log(builer.getAge());