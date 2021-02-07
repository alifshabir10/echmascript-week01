// high order function
let employees = ["raiz", "alif", "fahmi", "ahmad", "dafa", "ale", "amar", "andi", "rizky"];
// output : ["ziar", "fila"]
const passwordFor = value => value.split("").reverse("").join("") + value.length;

// 1. metode push manual, bisa gunakan loop untuk isi paswordList
let passwordList = [];
passwordList.push(passwordFor(employees[4]));
console.log(passwordList);

// 2. functional method
// let passwordEmps = employees.map(x => passwordFor(x));
let passwordEmps = employees.map(passwordFor);
console.log(passwordEmps);

// 2. functional method
let passwordEmps2 = employees.map(passwordFor);
console.log(passwordEmps2);


function passwordForRegular(value) {
    return value.split("").reverse("").join("") + value.length;
}
