// console.log('destructuring');

// const perosn =  {
//     name: 'Phil',
//     age: 29,
//     location: {
//         city: 'Kernsersville',
//         temp: 70
//     }
// };

// const {name = 'Anonymous', age} = perosn;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = perosn.location;

// console.log(`It's ${temperature} in ${city}.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, , state = 'North Carolina'] = address;

// console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}.`)