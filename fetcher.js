// const net = require('net');

const request = require('request');
const url = "https://www.google.com/"
request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); // Print the HTML for the Google homepage.
});


// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html