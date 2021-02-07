function sum(n) {
    let n1 = n/1000 //4321
    let nRatusan = n%1000 //321
    let n2 = nRatusan/100 //3.21
    let nPuluhan = nRatusan %100 //21
    let n3 = nPuluhan/10 //2.1
    let nSatuan = nPuluhan%10 //1

    return Math.floor(n1) + Math.floor(n2) + Math.floor(n3) + Math.floor(nSatuan);
}

console.log(sum(3456));