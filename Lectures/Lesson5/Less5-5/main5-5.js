// function foo() {
//     console.log('ok');
//     foo();
// }
// foo();


// function iterator(arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length){
//         iterator(arr, i);
//     }
// }
// iterator([11,22,33], 0);


let arr = [11, 22, 33, [44, 45, [111]], [66, 67, [68, [111]]]];
let innerArray = [];

function flatter(array) {

    for (let item of array) {
        if (Array.isArray(item)) {
            flatter(item);
        } else {
            innerArray.push(item);
        }
    }
}

flatter(arr);
console.log(innerArray);