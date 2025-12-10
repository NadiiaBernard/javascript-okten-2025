// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a,b) => a*b;
// console.log(square(5,7));


// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
// let squareRound = (radius) => Math.PI * radius * radius;
// console.log(squareRound(5));


// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// let squareCylinder = (radius, height) => 2 * Math.PI * radius * height;
// console.log(squareCylinder(5, 15));


// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
// let foobar = (array) => {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// foobar([1,2,3]);



// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
// let text = (someText) => {
//    document.write(`<p>${someText}</p>`);
// }
// text('hello');
// text('js');



// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let  list = (someText) => {
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
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (someText, quantify) =>{
//     document.write('<ul>');
//     for (let i = 0; i < quantify; i++) {
//         document.write(`<li>${someText}</li>`);
//     }
//     document.write('</ul>');
// }
// list('hello', 5);
// list('okten', 7);



// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let  foobar = (someArray) => {
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
// let foobar = (users) => {
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



//     #pghbnSB
// – створити функцію, яка повертає найменше число з масиву
// let minNum = (arr) => {
//     let min = arr[0];
//     for (let arrElement of arr) {
//         if(arrElement < min){
//             min = arrElement;
//         }
//     }
//     return min;
// }
// console.log(minNum([5,-4,100,0]));
// console.log(minNum([5,4,100,0]));



// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//  let sum = (arr) => {
//     let counter = 0;
//      for (let num of arr) {
//          counter= counter+ num;
//      }
//      return counter;
//  }
// console.log(sum([1, 2, 10]));
// console.log(sum([2, 18, -10]));


// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr,index1,index2) => {
//     if(index1 < arr.length && index2 < arr.length ){
//    let temp = arr[index1];
//    arr[index1] = arr[index2];
//    arr[index2] = temp;
//    return arr;
// }
//     return -Infinity;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));




// #mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (let i = 0; i < currencyValues.length; i++) {
//        if (currencyValues[i].currency === exchangeCurrency){
//            return sumUAH/ currencyValues[i].value;
//        }
//     }
//     return 'Такої валюти немає';
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
// console.log(exchange(12000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));
// console.log(exchange(12000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'ff'));
// console.log(exchange(15000, [{currency: 'USD', value: 50}, {currency: 'EUR', value: 42}], 'USD'));
// console.log(exchange(15000, [{currency: 'USD', value: 50}, {currency: 'EUR', value: 42}], 'UD'));