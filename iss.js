const request = require("request");
const url = 'https://api.ipify.org?format=json';


const fetchCoordsByIP = function(ip, callback) {
  request.get(`http://ip-api.com/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const parsed = JSON.parse(body);

    if (parsed.status === "fail") {
      const msg = `Status: ${parsed.status} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const coords = {};
    coords.latitude = parsed.lat;
    coords.longitude = parsed.lon;
    callback(null,  coords);
    return;
  });
};


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (body) {
      callback(null, JSON.parse(body).ip);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };