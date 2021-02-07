import Car, { Taxi, Angkot } from './Car.js'
import {listCar} from './ApiCar.js'
import {findCarByMerk} from './ApiCar.js'

function Main() {
    const hrv = new Car("Honda", "2015", "gojek");
    console.log(hrv);
    const grab = new Taxi("Honda", "2020", "Grab");

    console.log(grab);
    console.log(grab.totalRevenue(4000.00, 5));
    // console.log(gojek.sayHi("gojek"));
    const bluebird = new Angkot("King", "2025", "Bluebird");
    
    const jupiter = new Taxi("Mustang", "2025", "jupiter");
    console.log(bluebird);
    // console.log("Total Car : " +Car.totalCar);
    // console.log(`Total Car : ${+Car.totalCar}`);

    const cars = listCar(hrv,grab,bluebird,jupiter);
    console.log(cars);

    const merks = findCarByMerk(cars);
    console.log(merks);
}

Main();