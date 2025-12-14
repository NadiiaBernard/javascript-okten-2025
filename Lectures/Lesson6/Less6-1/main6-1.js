// let str = 'hello okten';
// console.log(str);
// console.log(str[0]);
// for (let strElement of str) {
//     console.log(strElement);
// }
//
// let s = new String('qwerty');
// console.log(s);
// console.log(typeof s);

let str = 'Hello okten';
console.log(str);
let s = str.concat('!!!');
console.log(s);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.startsWith('He'));
console.log(str.endsWith('ten'));
console.log(str.substring(0, 7));
console.log(str.indexOf('t'));
console.log(str.lastIndexOf('o'));
console.log(str.indexOf('o', 5));
console.log(str.charAt(7));
console.log(str.replace('e', '!'));
console.log(str.replaceAll('e', '!!!'));
console.log(str.split('e'));
