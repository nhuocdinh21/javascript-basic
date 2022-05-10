// variable

// Template string -------------------------------------------------------------------------
let a = 5, b = 10;
console.log(`Total is ${a + b} and
not ${2 * a + b}`);
console.log(`Template string -------------------------------------------------------------------------`);
console.log(`Test string variable: a = ${a}, b = ${b}, a + b = ${a + b}`);

// Object (include key:value) {key: value, key: value} management by "key" -------------------------------------------------------------------------
let obj_a = {
    name: 'Eric',
    address: 'Ha Noi',
};
let obj_b = 'Eric';
// Result Type 1
console.log(`Object -------------------------------------------------------------------------`);
console.log(`Type of obj_a`, typeof obj_a, obj_a);
console.log(`What's your name ?`, ` My name's `, obj_a.name);
console.log(`Where are you from ?`, ` I'm from `, obj_a.address);

// Result Type 2
// Dynamic key in Object
let obj_key = 'name';
obj_a[obj_key] = 'Alice';
console.log(`What's your name ?`, ` My name's `, obj_a['name']);
console.log(`Where are you from ?`, ` I'm from `, obj_a['address']);

// Array [item1, item2, item3] management by "index" -------------------------------------------------------------------------
let arr_a = ['MU', 'Chelsea', 'LiverPool'];
console.log(`Array -------------------------------------------------------------------------`);
console.log(`Type of arr_a`, typeof arr_a, arr_a);
console.log(`First item: `, arr_a[0], `Second item: `, arr_a[1]);

let arr_b = [
    { name: 'Eric', age: 25 },
    { name: 'Monica', age: 24 }
];
console.log(`My family: `, arr_b);

// Compare (== vs ===) different is === will check type of value, when use == is variabele try convert variable string to numbers -------------------------------------------------------------------------
let com_a = 5;
let com_b = '5';
console.log(`Compare -------------------------------------------------------------------------`);
console.log(`Compare variable com_a, com_b: `, `a = `, com_a, ` b = `, com_b, ` result: `, com_a == com_b);
console.log(`Compare variable com_a, com_b: `, `a = `, com_a, ` b = `, com_b, ` result: `, com_a === com_b);

// Empty, null, undefined -------------------------------------------------------------------------
// When use Empty: Memory used (for String), Null: Memory not used (for Object)

// Loops -------------------------------------------------------------------------
// When use loop for and while, while use when condition true or false, for use when exacly number loop
// Loop for
console.log(`Loop for -------------------------------------------------------------------------`);
for (let i = 0; i < 10; i++) {
    console.log(`Check variable i = `, i);
}

let arr_for = ['MU', 'Mancity', 'Liver', 'Chelsea'];
for (let i = 0; i < arr_for.length; i++) {
    console.log(`Team `, arr_for[i]);
}

// Loop while
console.log(`Loop while -------------------------------------------------------------------------`);
let arr_while = ['MU', 'Mancity', 'Liver', 'Chelsea'];
let i = 0;
while (i < arr_while.length) {
    console.log(`Team `, arr_while[i]);
    i++;
}

// If else statement -------------------------------------------------------------------------
console.log(`If else statement -------------------------------------------------------------------------`);
let arr_ifelse = ['MU', 'Mancity', 'Liver', 'Chelsea'];
let i_ifelse = 0;
while (i_ifelse < arr_while.length) {
    if (arr_ifelse[i_ifelse].length === 2) {
        console.log(`Team name has 2 character`, arr_while[i_ifelse]);
    }
    i_ifelse++;
}

// Break -------------------------------------------------------------------------
console.log(`Break Loop -------------------------------------------------------------------------`);
let arr_breakarr = ['MU', 'Mancity', 'Liver', 'Chelsea'];
let i_break = 0;
while (i_break < arr_breakarr.length) {
    console.log(`Check i`, i_break);
    if (arr_ifelse[i_break].length === 5) {
        console.log(`Found it:`, arr_breakarr[i_break]);
        break;
    }
    i_break++;
}

// Declare function -------------------------------------------------------------------------
function sum(a, b) {
    return a + b;
}
let total = sum(5, 10);
console.log(`Declare function -------------------------------------------------------------------------`);
console.log(`Sum a + b = `, total);

// Arrow function -------------------------------------------------------------------------
let sum_arrfun = (a, b) => {
    return a + b;
}
console.log(`Arrow function -------------------------------------------------------------------------`);
console.log(`Sum with arrow function sum_arrfun = `, sum_arrfun(5, 10));

// Different Function vs Method -------------------------------------------------------------------------
let sum_difffun = (a, b) => {
    return a + b;
}
console.log(`Different Function vs Method -------------------------------------------------------------------------`);
console.log(`Check sum_difffun: `, sum_difffun(9, 6));

let obj_func = {
    name: 'Eric',
    address: 'Ha Noi',
    getName: function () {
        return this.name;
    }
};
// Method will be in Class, Function
// Function lying alonne 
console.log(`Check method: `, obj_func.getName());

// Callback, setTimeout, setInterval -------------------------------------------------------------------------
// setInerval will loop infinite
console.log(`Callback -------------------------------------------------------------------------`);
let sum_callback = (a, b, callback) => {
    let total = a + b;
    callback(total);
    // setTimeout(() => {
    //     callback(total);
    // }, 5000);

    // let i = 0;
    // let timer = setInterval(() => {
    //     callback(total);
    //     i++;
    //     if (i === 5) {
    //         clearInterval(timer);
    //     }
    // }, 1000);

}
let print_sumcallback = (message) => {
    console.log(`Check sum callback: `, message);
}
sum_callback(9, 6, print_sumcallback);

// Array Method -------------------------------------------------------------------------
// Filter/Find
// Filter return array (if null return []), Find return "first" element (if null return undefined)
console.log(`Filter/Find -------------------------------------------------------------------------`);
let arr_filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Filter
let filter = arr_filter.filter((item, index) => {
    console.log(`Check filter item:`, item, ` index: `, index);
    return item && item > 5;
});
console.log(filter);

let arr_filterobj = [
    { name: 'Eric', age: 25 },
    { name: 'ABC', age: 29 },
    { name: 'Monica', age: 25 },
    { name: 'Ross', age: 24 },
    { name: 'Jessica', age: 35 },
];

// let filter_arrobj = arr_filterobj.filter((item, index) => {
//     return item && item.age === 25;
// });
// console.log(filter_arrobj);

let filter_arrobj = arr_filterobj.find((item, index) => {
    return item && item.age === 25;
});
console.log(filter_arrobj);

// Map Array -------------------------------------------------------------------------
// Copy and create new Array (not change odd array)
console.log(`Map Array -------------------------------------------------------------------------`);
let arr_checkmap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr_checkmap.length; i++) {
//     arr_checkmap[i] = arr_checkmap[i] * arr_checkmap[i];
// }

console.log(`Check value array: `, arr_checkmap);

let map_arr = arr_checkmap.map((item, index) => {
    // item = item * item;
    // return item;
    return (
        `<td>${item} - ${index}</td>`
    );
})

console.log(`Check value map array: `, map_arr);

// Reduce -------------------------------------------------------------------------
// Reduce use with array

// Sort -------------------------------------------------------------------------
const arr_sort = [1, 30, 4, 21, 100000];
arr_sort.sort((item1, item2) => {
    return item1 - item2;
});
console.log(`Sort -------------------------------------------------------------------------`);
console.log(arr_sort);

// Lodash (Toi uu code voi Object va Array)
// Usual(Thuong dung) with Object and Array
