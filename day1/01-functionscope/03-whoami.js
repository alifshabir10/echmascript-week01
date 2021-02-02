function whoAmI(value){
    if(typeof value === "number"){
        return  "you are number";
    } else if(typeof value === "string"){
        return "you are string";
    } else if(typeof value === "null"){
            return "you are null";
    } else {
        return "undefined";
    }
}

console.log(whoAmI(45));
console.log(whoAmI());
console.log(whoAmI("hello"));