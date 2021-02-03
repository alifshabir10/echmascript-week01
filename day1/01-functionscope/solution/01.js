let n = 1234;

function reverse (n){
    let ribuan = 0, ratusan = 0, puluhan = 0, satuan = 0;

    ribuan = Math.round(n / 1000);
    sisa = n % 1000;
    ratusan = Math.round(sisa / 100);
    sisa = Math.round(sisa % 100);
    puluhan = Math.round(sisa / 10);
    satuan = Math.round(sisa % 10);
    return satuan +""+puluhan+""+ratusan+""+ribuan;
}

console.log(reverse(n));