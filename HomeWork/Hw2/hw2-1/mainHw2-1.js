// #67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = ['okten', 'js', 'react', 2026, true, false, 25, 'guitar', 'car', 0];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);


// #LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'Harry Potter and the Philosophers Stone',
//     pageCount: 332,
//     genre: 'fantasy'
// }
// let book2 = {
//     title: 'A Captain at Fifteen',
//     pageCount: 220,
//     genre: 'adventure novel'
// }
// let book3 = {
//     title: 'Beartown',
//     pageCount: 432,
//     genre: 'novel'
// }
// console.log(book1, book2, book3);


// #sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
// let book1 = {
//     title: 'Harry Potter and the Philosophers Stone',
//     pageCount: 332,
//     genre: 'fantasy',
//     authors: [
//         {
//             name: 'J.K. Rowling',
//             age: 60
//         }
//     ]
// }
// let book2 = {
//     title: 'New Dark Ages. Colony',
//     pageCount: 904,
//     genre: 'sci-fi',
//     authors: [
//         {
//             name: 'Max Kidruk',
//             age: 41
//         }
//     ]
// }
// let book3 = {
//     title: 'Beartown',
//     pageCount: 432,
//     genre: 'novel',
//     authors: [
//         {
//             name: 'Fredrik Backman',
//             age: 44
//         }
//     ]
// }
// console.log(book1, book2, book3);


// #jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username, password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'name1', username1: 'qwerty', password: 100500},
//     {name: 'name2', username1: 'qwerty', password: 100500},
//     {name: 'name3', username1: 'qwerty', password: 100500},
//     {name: 'name4', username1: 'qwerty', password: 100500},
//     {name: 'name5', username1: 'qwerty', password: 100500},
//     {name: 'name6', username1: 'qwerty', password: 100500},
//     {name: 'name7', username1: 'qwerty', password: 100500},
//     {name: 'name8', username1: 'qwerty', password: 100500},
//     {name: 'name9', username1: 'qwerty', password: 100500},
//     {name: 'name10', username1: 'qwerty', password: 100500}
// ];
//
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);
// console.log(users[6]);
// console.log(users[7]);
// console.log(users[8]);
// console.log(users[9]);


// #coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
// let weather = [[4, 13, 7],
//     [5, 11, 6],
//     [11, 16, 5],
//     [8, 21, 9],
//     [6, 18, 2],
//     [2, 17, 9],
//     [3, 14, 6]
// ]


// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('enter number');
// let access = x !== 0? 'Вірно': 'Невірно';
// console.log(access);


// #3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).
// let time = 45;
// if (time >= 0 && time < 15) {
//     console.log('I');
// } else if (time >= 15 && time < 30) {
//     console.log('II');
// } else if (time >= 30 && time < 45) {
//     console.log('III');
// } else if (time >= 45 && time <= 59) {
//     console.log('IV');
// } else {
//     console.log('???');
// }


// #UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 25;
// if (day >= 1 && day < 10) {
//     console.log(1)
// } else if (day >= 10 && day < 20) {
//     console.log(2)
// } else if (day >= 20 && day <= 31) {
//     console.log(3)
// } else {
//     console.log('???');
// }


// #KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
// switch (6) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('???');
// }


// #uwsz1RnTQJ1
// – Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати, коли введені рівні числа.
// let x = 5;
// let y = 7;
// if (x > y) {
//     console.log(x);
// } else if (x < y) {
//     console.log(y)
// } else if (x === y) {
//     console.log('числа рівні');
// }


// #iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// let x = '';
// if (x === 0 || x === null || x === undefined || x === NaN || x === '') {
//     console.log('default') ;
// }else{
//     console.log(x);
// }

