// #yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90,100];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }


// #GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let string of str) {
//     console.log(string);
// }


// #Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [true, false, 2025, 2000, 555, 'html', 'js', 'react', 'nodejs', 'mongodb'];
// for (let arrElement of arr) {
//     console.log(arrElement);
// }


// #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [true, false, 2025, 2000, 555, 'html', 'js', 'react', 'nodejs', 'mongodb'];
// for (let arrElement of arr) {
//     if (typeof arrElement === "boolean"){
//         console.log(arrElement);
//     }
// }


// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [true, false, 2025, 2000, 555, 'html', 'js', 'react', 'nodejs', 'mongodb'];
// for (let arrElement of arr) {
//     if (typeof arrElement === "number"){
//         console.log(arrElement);
//     }
// }


// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [true, false, 2025, 2000, 555, 'html', 'js', 'react', 'nodejs', 'mongodb'];
// for (let arrElement of arr) {
//     if (typeof arrElement === "string"){
//         console.log(arrElement);
//     }
// }


// #0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = 'okten';
// arr[3] = false;
// arr[4] = 'js';
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }


// #mDMWMW5a
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(`<p>${i}</p>`);
// }


// #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(`<p>${i}</p>`);
// }


// #s24slNyz7
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
//     document.write(`<p>${i}</p>`);
// }


// #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log( i);
//         document.write(`<p>${i}</p>`);
//     }
// }


// #Tfrwls7FM
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log( i);
//         document.write(`<p>${i}</p>`);
//     }
// }


// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори , жанри).
// let books = [
//     { title: "The Hobbit", pages: 310, genres: ["fantasy"], authors: ["J.R.R. Tolkien"] },
//     { title: "Good Omens", pages: 288, genres: ["fantasy", "comedy"], authors: ["Terry Pratchett", "Neil Gaiman"] },
//     { title: "War and Peace", pages: 1225, genres: ["drama", "war"], authors: ["Leo Tolstoy"] },
//     { title: "Dune", pages: 412, genres: ["sci-fi", "adventure"], authors: ["Frank Herbert"] },
//     { title: "American Gods", pages: 480, genres: ["fantasy", "mythology", "drama"], authors: ["Neil Gaiman"] }
// ];


// – знайти найбільшу книжку.
// let maxPage = 0;
// let biggestBook;
//
// for (let book of books) {
//     if (book.pages > maxPage) {
//         maxPage = book.pages;
//         biggestBook = book.title;
//     }
// }
// console.log(biggestBook);
// document.write(biggestBook);


// – знайти книжку/ки з найбільшою кількістю жанрів
// let maxGenre = 0;
// let bookGenre;
// for (let book of books) {
//     if (book.genres.length > maxGenre) {
//         maxGenre = book.genres.length;
//         bookGenre = book.title;
//     }
// }
// console.log(bookGenre);
// document.write(bookGenre);


// – знайти книжку/ки з найдовшою назвою
// let nameLength = 0;
// let bookTitleLength;
// for (let book of books) {
//     if (book.title.length > nameLength) {
//         nameLength = book.title.length;
//         bookTitleLength = book.title;
//     }
// }
// console.log(bookTitleLength, nameLength);
// document.write(bookTitleLength);


// – знайти книжку/ки, які писали 2 автори
// for (let book of books) {
//     if (book.authors.length === 2) {
//         console.log(book.title);
//         document.write(book.title);
//     }
// }


// – знайти книжку/ки, які писав 1 автор
// for (let book of books) {
//     if (book.authors.length === 1) {
//         console.log(book.title);
//         document.write(book.title);
//     }
// }