// function *foo() {
//     yield 100;
//     yield 200;
//     yield 300;
// }
//
// let fooGenerator = foo();
// console.log(fooGenerator);
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());


function* cardsHolder() {
    const cards = [
        {value: 6, suite: 'diamond'},
        {value: 7, suite: 'spade'},
        {value: 8, suite: 'diamond'},
        {value: 9, suite: 'spade'}
    ];
    for (const card of cards) {
        yield card;
    }
}

let cardsHolderGenerator = cardsHolder();
let card = cardsHolderGenerator.next();
console.log(card.value);
console.log(cardsHolderGenerator.next());
let card3Data = cardsHolderGenerator.next().value;
console.log(card3Data);



