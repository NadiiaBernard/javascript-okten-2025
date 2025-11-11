// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
// function square(a,b) {
//     return a*b;
// }
// console.log(square(5,7));


// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
// function squareRound(radius) {
//     let result = Math.PI * radius * radius;
//     console.log(result);
// }
// squareRound(5);


// // #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// function squareCylinder(radius, height) {
//     let result = 2 * Math.PI * radius * height;
//     console.log(result);
// }
// squareCylinder(5, 15);


// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
// function foobar(array) {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// foobar([1,2,3]);


// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function text(someText) {
//    document.write(`<p>${someText}</p>`);
// }
// text('hello');
// text('js');


// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function list(someText) {
//     document.write(` <ul>
// <li>${someText}</li>
// <li>${someText}</li>
// <li>${someText}</li>
// </ul>
// `);
// }
// list('hello');
// list('okten');


// #0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function list(someText, quantify) {
//     document.write('<ul>');
//     for (let i = 0; i < quantify; i++) {
//         document.write(`<li>${someText}</li>`);
//     }
//     document.write('</ul>');
// }
// list('hello', 5);
// list('okten', 7);


// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// function foobar(someArray) {
//     document.write('<ul>');
//     for (let someArrayElement of someArray) {
//         document.write(`<li>${someArrayElement}</li>`);
//     }
//     document.write('</ul>');
// }
// foobar([true, false, 123, 'kyiv', 555]);
// foobar(['js', 2025, true]);


// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
// function foobar(users) {
//     for (let user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age} ${user.status}</div>`)
//     }
// }
// foobar([{
//     id:1,
//     name: 'kokos',
//     age: 23,
//     status: true
// }, {
//     id:2,
//     name: 'abrikos',
//     age: 25,
//     status: true
// }]);


// #pghbnSB
// – створити функцію яка повертає найменше число з масиву
// function minValue(array) {
//     let min = array[0];
//     for (let number of array) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(minValue([5, 7, 2]));
// console.log(minValue([-5, -7, -2]));


// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     let counter = 0;
//     for (const arrElement of arr) {
//         counter = counter + arrElement;
//     }
//     return counter;
// }
// console.log(sum([1, 2, 10]));
// console.log(sum([1, -2, 10]));


// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2) {
//     if(index1 < arr.length && index2 < arr.length ){
//    let temp = arr[index1];
//    arr[index1] = arr[index2];
//    arr[index2] = temp;
//    return arr;
// }
//     return -Infinity;
// }
// console.log(swap([11, 22, 33, 44], 3, 0));