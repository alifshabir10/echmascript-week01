//  initial map
let ceo = new Map();
ceo.set("facebook", "Mark");
ceo.set("google", "Larry");
ceo.set("line", "Rian");
// ceo.set("whatshapp", "Danny");

// console.log(ceo.size);
// console.log(ceo.get("line"));

for (const [key, value] of ceo) {
    console.log(key + " founded by " + value);
}

// ceo.forEach((key, value) => {
//     console.log(key + "founded by " + value);
// }
// };
