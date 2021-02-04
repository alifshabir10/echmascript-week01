
import Members, { Beasiswa, Reguler } from "./Members.js"

export const totalMembers = (...list) => {
    return Members.totalMembers;
}

export const totalBeasiswa = () => {
    return Beasiswa.totalBeasiswa;
}
export const totalInsentif = () => {
    return Beasiswa.totalInsentif;
}
export const totalReguler = () => {
    return Reguler.totalReguler;
}
export const totalNetPrice = () => {
    return Reguler.totalNetPrice;
}

export const totalMemberBootcamp = (bootcamp, ...list) => {
    let count = 0;

    list.map(element => {
        if (element.bootcamp === bootcamp) {
            count++;
        }
    }
    )
    return count;
}