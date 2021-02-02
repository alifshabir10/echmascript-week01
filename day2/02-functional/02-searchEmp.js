let employees = ["raiz", "alif", "fahmi", "ahmad", "dafa", "ale", "amar", "andi", "rizky"];

// // arrow function filter
// const searchEmps = (emps, prefix) => emps.filter(emp => emp.startsWith(prefix));
// console.log(searchEmps("f"));

// old ways
function filterEmp(emps, prefix) {
    let result = [];
    for (let i = 0; i < emps.length; i++) {
        if (emps[i].startsWith(prefix)) {
            result.push(emps[i]);
        }

    }
    return result;
}
console.log(filterEmp(employees, "r"));