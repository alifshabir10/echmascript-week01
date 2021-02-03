// global variable
test = "js fullstack";
console.log(test);

// function scope
function scope(){
    var top = "top";
    console.log(top);

    var bottom = "bottom";
    console.log(bottom);
    
}

scope();

function scope2(print){
    var top = "atas";
    if (print) {
        var insideIf = "print";
    }
    console.log(insideIf);
}
// scope2(true);

function scope3(print){
    var top = "atas";
    if (print) {
        let insideIf = "print";
        console.log(insideIf);
    }
    
}

// scope3(true);

const x = "hello";
// x = "hello js";
console.log(x);

let y = "js";
y = "hello js";
console.log(y);

// let y = "test";

var z = "test";
var z = "good";
console.log(z);




