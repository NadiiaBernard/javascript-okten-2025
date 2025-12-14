let arr = [];
console.log(typeof arr);
console.log(Array.isArray(arr));
arr[arr.length] = 100;
console.log(arr.push('new'));
console.log(arr.push('new2'));
console.log(arr.push('new3'));
console.log(arr.push('new4'));
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift('start');
console.log(arr);
console.log(arr.shift());
console.log(arr.shift());
console.log(arr);

let str = '';
for (let arrElement of arr) {
    str += arrElement + ';';
}
console.log(str);

let join = arr.join('-');
console.log(join);

let nums = [11, 22, 33];

let result = arr.concat(nums);
console.log(result);

console.log(nums.reverse());

console.log(result);
console.log(result.slice(0, 4));

console.log(result);

let splice = result.splice(0, 2, 555, '!!!', 'qwe', 2026, 'okten');
console.log(splice);
console.log(result);

let ind = result.indexOf(11);
console.log(ind);
result.splice(ind, 1);
console.log(result);

console.log(result.includes(22));
console.log('hello'.includes('e'));