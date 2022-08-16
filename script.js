'use strict';
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// //?index 
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// //?length

// console.log(airline.length);
// console.log('B737'.length);

// //?indexOf && lastindexOf

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// //?slice 

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// //?slic && indexOf

// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// //? 
// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// //?

// const checkMiddleSeat = function(seat){
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E'){
//     console.log('You got middle seat 😬');
//   } else
//       console.log('You got lucky 😎');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// //? toUpperCase() && toLowerCase()

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// //! Fix capitalization in name 

// const passenger = 'jOnAS';//Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1)

// console.log(passengerCorrect);

// //!Comparing emails

// const email = 'hello@jonas.io';
// const loginEmail=' Hello@Jonas.Io \n'

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// // console.log(trimmedEmail);

// const normlizedEmail = loginEmail.toLowerCase().trim();

// console.log(normlizedEmail);
// console.log(email === normlizedEmail);

// //?replacing

// const priceGB = '288,97£'
// const priceUS = priceGB.replace('£','$').replace(',','.')

// console.log(priceUS);

// //?
// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

// console.log(announcement.replace('door' , 'gate'));
// console.log(announcement.replace(/door/gi , 'gate'));

// //?Boolrans 

// const plane = 'Airbus A320neo'
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airbus'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo') )
// {
//    console.log( 'yes');
// }

//? Practice Exercise 

// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log(' you are not allowed on board');
//   }else{
//     console.log('Welcom');
//   }
// }

// checkBaggage(' I have lap , food , knife');
// checkBaggage('sccked and cmera');
// checkBaggage('Got some snacks and a gun for protection');

//?task Ahmed Haron 

// for( let i = 1 ; i < 100 ; i++ ){
//     if (i % 3 === 0 && i % 7 === 0 ){
//       console.log('Open Sowce'); 
//     }    
//    else if ( i % 3 === 0 ) {
//        console.log('Open');
//    }      
//     else if ( i % 7 === 0){
//       console.log('Sowce');
//     } 
//     else 
//         console.log(i);   
// }

//? split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ')

// console.log(firstName, lastName);

// const newName = ['Mr.',firstName , lastName.toUpperCase()].join('-');
// console.log(newName);

//? 

// const capitalizeName = function (name){
//   const names = name.split(' ');
//   const nameUpper = [];
//   for(const n of names){
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     nameUpper.push(n.replace(n[0],n[0].toUpperCase()))
//   }
//   console.log(nameUpper.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

//?padStart + padEnd

// const message ='Go to gate 23!';
// console.log(message.padStart(20,'+').padEnd(30,'+'));
// console.log('jonas'.padStart(20,'+').padEnd(30,'+'));

// const maskCreditCard = function(number){

//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length,'*')
// }

// console.log(maskCreditCard(430300029983726));  
//  console.log(maskCreditCard('430300029983726'));  

 //? Repeat 

//  const message2 = 'Bad weather.... All Departues Delayed...'

//  console.log(message2.repeat(5) + '');

//  const planesInLine = function (n){
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)} `);
//  }

//  planesInLine(5);
//  planesInLine(3);
//  planesInLine(12);
//! ========= chalenge#4 ================ 
//  The Complete JavaScript Course 19
// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const text = document.querySelector('textarea').value;

// document.querySelector('button').addEventListener('click', function(){
// //  console.log('click');
//  const text = document.querySelector('textarea').value;
// const rows = text.split('\n');

// for( const [i,row] of rows.entries()){
//  const [first,second] = row.toLowerCase().trim().split('_');
 
//  const output = `${first}${second.replace(second[0],second[0].toUpperCase())} `;
//  console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
// }


 
// });

//!++++====Chaleng====++++

const flights =  
'_Delayed_Departure;fao93766189;txl12133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299988;fao93766109;12:05+_Departure;fao93766109;Lis2323639855;12:30' ;

// console.log(flights.split('+'));
const getCode = str=> str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
  const [type, from,to,time ] = flight.split(';');

  const output = `${type.startsWith('_Delayed')?'🔴':''}${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);
  console.log(output);
}