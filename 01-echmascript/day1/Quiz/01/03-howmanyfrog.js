function howManyFrogJump(x,y,z){
    // let posisiX = x;
    // let posisiY = y;
    // let jarak = z;
    let px = y-x;
    let sisa = px % 10;

    return sisa;
}

console.log(howManyFrogJump(10,85,35));