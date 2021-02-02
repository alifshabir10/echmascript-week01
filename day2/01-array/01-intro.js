// inital array
var array = new Array(3);//
array[0] = 3;
array[1] = 2;
array[2] = 4;


console.log(array);

// initaial array with dynamic elemen
array = ["code", ["js", "react"], "bootcamp", 2021];
console.log(array);


// add new element in last index
var list = ["a", "b", "c", "d"];
list.push("j", "r");
console.log(list);

// remove element
list.pop();
console.log(list);

// add element di index pertama
list.unshift("x");
console.log(list);

// remove first element 
list.shift();
console.log(list);

// access index tertentu
console.log(list[2]);


// looping for array
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element);

}


// for of
for (const key of list) {
    console.log(key);
}
// foreach 
list.forEach(element => {
    console.log(element);
});