//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation }  = require('./iss');

const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It didn\'t work!', error);
  }
  console.log(printPassTimes(passTimes));
});

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

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' } , (error, flyOverTimes) => {
//   if (error) {
//     console.log("Something went wrong", error);
//     return;
//   }
//   console.log("Your next fly over times are:", flyOverTimes);
// });


