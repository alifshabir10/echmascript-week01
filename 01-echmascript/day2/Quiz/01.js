let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

// Push
fruits.push("Anggur", "Banana", "Sirsak");
console.log(fruits);

// Pop
fruits.pop();
console.log(fruits);

// Splice(hapus jambu)
fruits.splice(2, 1);
console.log(fruits);

// Splice - hapus semua kecuali jeruk, mangga dan banana
fruits.splice(2, 3);
console.log(fruits);

// Splice -Tambahkan Rambutan dan Bengkuang
fruits.splice(2, 0, "Rambutan", "Bengkoang");
console.log(fruits);

// Splice -Replace Banana dengan Nangka
fruits.splice(4, 1, "Nangka");
console.log(fruits);

// Concat – Join array fruit & sayur
var Fruit = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
var Vege = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];
var Mark = Fruit.concat(Vege);
console.log(Mark);

// Reverse – Reverse array
const reverse = Mark.reverse() ;
console.log(reverse);





