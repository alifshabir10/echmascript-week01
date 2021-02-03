const student = {
    nama : "dian",
    kota : "bandung"

}

let infoStudent = student;
infoStudent = {...student, bootcamp:"js"};
console.log(infoStudent);


infoStudent = {...student, totalPoint:80};
console.log(infoStudent);