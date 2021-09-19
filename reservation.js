// JavaScript 102 project. satr.codes By:wala radi.

class Vehicle{
    constructor(id, name, companyName){
        this.id = id 
        this.name = name 
        this.companyName = companyName
    }
}

class Car extends Vehicle{
    constructor(id, name, companyName,carType){
        super(id, name, companyName)
        this.carType = carType 
    }
}

class Plane extends Vehicle{
    constructor(id, name, companyName,planeType){
        super(id, name, companyName)
        this.planeType= planeType
    }
}


class Employee{
    constructor(id, name, dateOfBirth){
        this.id = id 
        this.name = name 
        this.dateOfBirth = dateOfBirth
    }
}

class Driver extends Employee{
    constructor(id, name, dateOfBirth,licenseID){
        super(id, name, dateOfBirth)
        this.licenseID = licenseID
    }
}

class Pilot extends Employee{
    constructor(id, name, dateOfBirth,licenseID){
        super(id, name, dateOfBirth)
        this.licenseID = licenseID
    }
}


class Reserved{
    constructor( reservationID, reservationDate, employeeId , vehiclesId){
        this.reservationID = reservationID
        this.reservationDate = reservationDate
        this.employeeId = employeeId
        this.vehiclesId= vehiclesId
    }
}

const car1 = new Car('car1', 'audi', 'audi', 'gas')
const car2 = new Car('car2', 'mustang', 'ford', 'gas')
const car3 = new Car('car3', 'BMW', 'BMW', 'electric')
const plane1 = new Plane('plane1', 'Airbus', 'Airbus Group', 'A320')
const plane2 = new Plane('plane2', 'Boeing', 'Boeing','777x')

const driver1 = new Driver('driver1', 'ahmed', '02/04/1996','#343389')
const driver2 = new Driver('driver2', 'khalid', '08/12/1990','#343791')
const pilot1 = new Pilot('pilot1', 'samer', '06/10/1899','#215990')
const pilot2 = new Pilot('pilot2', 'fahad', '01/01/1999','#215763')


//قم بكتابة دالة بحيث تقوم باستقبال id الموظف مع id المركبة وتحقق، في حالة كان الموظف طيّار والمركبة سيّارة سيتم طباعة رسالة بعدم توافقهم
const reservationArray = [];
function check(employeeId, vehicleId, reservationId){
    if (employeeId.includes('driver') && vehicleId.includes('car') || employeeId.includes('pilot') && vehicleId.includes('plane') ){
        const d = new Date();
        const dateToday= d.getDate()+ '-' + (d.getMonth()+1) + '-' + d.getFullYear()
        const ob = new Reserved(`reservation${[reservationId]}`, dateToday, employeeId , vehicleId);
        reservationArray.push(ob);
        return `The '${vehicleId}' has been assigned to '${employeeId}'.
Please wait while reservation numbers are issued.`;
    } else {
        return 'An error occurred, please check the vehicle number or employee number.'
    }
}

console.log(check(driver2.id , car1.id , 1));
console.log(check(driver1.id , plane1.id , 2));
console.log(check(pilot1.id , plane2.id , 3));
console.log(check(pilot2.id , car1.id , 4));

const printReservations = reservationArray.map(function(element){
    console.log(element);;
})