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

// for( let i = 1 ; i < 30 ; i++ ){
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