// function declaration
function foo(){
    return "foo";
}

console.log(foo());

//functuin expression
const fnc_exp = function (value){
    return value;
}

console.log(fnc_exp);

//functuin expression with name
const fnc_expx = function foo (value){
    return value;
}

// console.log(fnc_exp);

//arrow function
const fn_arrow = () => {

}

const arrow = (value) => {
    return "hello" +value
}

console.log(arrow("JS"));