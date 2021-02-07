function reverseTheNs(n){
    let n1 = n/1000 //4321
    let nRatusan = n%1000 //321
    let n2 = nRatusan/100 //3.21
    let nPuluhan = nRatusan %100 //21
    let n3 = nPuluhan/10 //2.1
    let nSatuan = nPuluhan%10 //1

    return (nSatuan*1000) + (Math.round(n3)*100) + (Math.round(n2)*10) + Math.round(n1);
}

console.log(reverseTheNs(1234));