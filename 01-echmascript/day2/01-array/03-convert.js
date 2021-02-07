// return index
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));

// convert array into string
let str = ["java", "js", "python", "golan"];
console.log(str.join(","));
console.log(typeof str);

// convert string to array
let com = "code.id";
console.log(com.split(""));

// regular function
function passwordForRegular(value) {
    return value.split("").reverse("").join("") + value.length;
}
// arrow function ; kasus kata code.id => di.edoc8
// const or let
const passwordFor = value => value.split("").reverse("").join("") + value.length;

console.log(passwordFor("code.id"));