// #WpkK0ZH1
// створити масив з:
//   – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль
// let n = [-5, 0, 77, 100, 25];
// console.log(n);
// let s = ['html', 'js', 'react', 'nodejs', 'mongo'];
// console.log(s);
// let arr = [true, 'okten', 2025, false, 0];
// console.log(arr);


// #4aDbSgh
//  Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'hello';
// arr[1] = false;
// arr[2] = 'world';
// arr[3] = true;
// arr[4] = 555;
// console.log(arr);


// #qLQLJSeN7i
// є масив [2,17,13,6,22,31,45,66,100,-18] :

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
// let i = 0;
// while (i<arr.length){
//     console.log(arr[i])
//     i++;
// }


// 2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i])
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (i % 2 !== 0) {
//     console.log(arrElement);
// }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arr[i] % 2 === 0) {
//     console.log(arrElement);
// }
// }


// 7. замінити кожне число, кратне 3, на слово “okten”
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 3 === 0){
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);


// 8. вивести масив у зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// 1. перебрати його циклом while, але у зворотньому циклі (задом наперед)
// let i = arr.length - 1;
// while (i >= 0){
//     console.log(arr[i])
//     i--;
// }


// 2. перебрати його циклом for, але у зворотньому циклі (задом наперед)
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом, але у зворотньому циклі (задом наперед)
// let i = arr.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(arr[i])
//     }
//     i--;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом, але у зворотньому циклі (задом наперед)
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     if (i % 2 !== 0) {
//     console.log(arrElement);
// }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення, але у зворотньому циклі (задом наперед)
// let i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//     i--;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення, але у зворотньому циклі (задом наперед)
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     if (arr[i] % 2 === 0) {
//     console.log(arrElement);
// }
// }


// 7. замінити кожне число, кратне 3, на слово “okten”, але у зворотньому циклі (задом наперед)
// for (let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] % 3 === 0){
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);
