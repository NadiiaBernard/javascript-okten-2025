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
let book1 = {
    title: 'Harry Potter and the Philosophers Stone',
    pageCount: 332,
    genre: 'fantasy',
    authors: [
        {
            name: 'J.K. Rowling',
            age: 60
        }
    ]
}
let book2 = {
    title: 'New Dark Ages. Colony',
    pageCount: 904,
    genre: 'sci-fi',
    authors: [
        {
            name: 'Max Kidruk',
            age: 41
        }
    ]
}
let book3 = {
    title: 'Beartown',
    pageCount: 432,
    genre: 'novel',
    authors: [
        {
            name: 'Fredrik Backman',
            age: 44
        }
    ]
}
console.log(book1, book2, book3);