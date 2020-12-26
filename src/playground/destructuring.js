//  ** OBJECT desctructuring **
const person = {
    name : 'Akshay',
    age : 19,
    location : {
        city : 'Indore',
        temp : 12
    }
};

const {name : firstName = 'Annonymous', age} = person;
const {city, temp : temperature} = person.location;

console.log( `${firstName} is ${age}`);
console.log( `${city}  ${temperature}`);

//  ** Array desctructuring **

const address = ['1299 S Juniper Street', 'Indore' , 'India' , '455001'];

const [, city, country] = address;

console.log(`You are in ${city} ${country}`);