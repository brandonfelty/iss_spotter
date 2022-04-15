const { fetchMyIP, fetchCoordsByIP }  = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP("invalideip", (error, data) => {
//   console.log('error', error);
//   console.log('data', data);
// })