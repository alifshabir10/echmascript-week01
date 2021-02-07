export default class Members {
    static totalMembers = 0;
    constructor(fullName, city, education, grade, bootcamp, batch, year, skillPoint) {

        this.fullName = fullName;
        this.city = city;
        this.education = education;
        this.grade = grade;
        this.bootcamp = bootcamp;
        this.batch = batch;
        this.year = year;
        this.skillPoint = skillPoint;
        Members.totalMembers++;
    }
}


class Beasiswa extends Members {
    static totalBeasiswa = 0;
    static totalInsentif = 0;
    constructor(fullName, city, education, grade, bootcamp, batch, year, skillPoint, insentif) {
        super(fullName, city, education, grade, bootcamp, batch, year, skillPoint);
        this.insentif = insentif;
        Beasiswa.totalInsentif += insentif;
        Beasiswa.totalBeasiswa++;
    }

}

class Reguler extends Members {
    static totalReguler = 0;
    static totalNetPrice = 0;
    constructor(fullName, city, education, grade, bootcamp, batch, year, skillPoint, netPrice) {
        super(fullName, city, education, grade, bootcamp, batch, year, skillPoint);
        this.netPrice = netPrice;
        Reguler.totalReguler++;
        Reguler.totalNetPrice += netPrice;
        
    }
}

export { Beasiswa, Reguler }