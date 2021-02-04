import { totalMemberBootcamp, totalBeasiswa, totalInsentif, totalMembers, totalReguler, totalNetPrice } from './api-member.js'
import  { Beasiswa, Reguler } from './Members.js'


function Main() {
    const s1 = new Beasiswa("Asep", "Bandung", "S1", 3.45, "NodeJS", 1, 2019, 3, 100000);
    console.log(s1);
    const s2 = new Beasiswa("Ami", "bogor", "S1", 3.10, "NodeJS", 1, 2019, 3, 100000);
    const s3 = new Beasiswa("Budi", "Depok", "S1", 3.25, "Java", 2, 2020, 3, 100000);
    const s4 = new Beasiswa("Cindy", "Jakarta", "D3", 3.30, "Java", 2, 2020, 3, 100000);
    const s5 = new Beasiswa("Dedy", "Bekasi", "S2", 2.98, "NodeJS", 1, 2019, 4, 100000);
    const s6 = new Reguler("Desta", "Jakarta", "S1", 3.15, "Golang", 3, 2020, 3, 5000000);
    const s7 = new Reguler("Shinta", "Jakarta", "S1", 3.15, "Golang", 3, 2020, 4, 5000000);
    const s8 = new Reguler("Meita", "Jakarta", "S1", 3.00, "Python", 3, 2020, 4, 7000000);
    const NodeJs = totalMemberBootcamp('NodeJS', s1, s2, s3, s4, s5, s6, s7, s8);
    const Java = totalMemberBootcamp('Java', s1, s2, s3, s4, s5, s6, s7, s8);
    const Golang = totalMemberBootcamp('Golang', s1, s2, s3, s4, s5, s6, s7, s8);
    const Python = totalMemberBootcamp('Python', s1, s2, s3, s4, s5, s6, s7, s8);

    console.log(`Total Peserta : ${totalMembers()}`);
    console.log(`Total Beasiswa : ${totalBeasiswa()}`);
    console.log(`Total Insentif : ${totalInsentif()}`);
    console.log(`Total Reguler : ${totalReguler()}`);
    console.log(`Total NetPrice : ${totalNetPrice()}`);
    console.log(`Total NodeJs : ${NodeJs}`);
    console.log(`Total Golang : ${Golang}`);
    console.log(`Total Python : ${Python}`);
}

Main();