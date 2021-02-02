var s = "code".charAt(0);
console.log(s);

var s = "codeid".substr(2,3);
console.log(s);

// compare ad & b 
var a = "add";
var b = "b";
console.log(a < b);

// compare ad & ab
var a = "add";
var b = "ab";
console.log(a < b);

// index of, return posisi index yang di cari
console.log("code ecma".indexOf("code ")); // return 0
console.log("code ecma".indexOf("de ecma")); // return 5

// decomposition -> diubah menjadi array
var s = "java, javascript, phyton";
console.log(s.split(","));

var s = "codeecma";
console.log(s.split(""));

// function replace
var s = "hello world".replace("world", "js");
console.log(s); // return hello js