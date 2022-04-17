const request = require('request');
const fs = require('fs');
const { rawListeners } = require('process');
let http = process.argv[2];
let file = process.argv[3];


request(http, (error, response, body) => {
  if (error) {
    console.log('URL does not exist an/or is invalid')
  }
  else{
    console.log("error writing file")
  }
})
  var stats = fs.statSync(file);
  const fileSizeInBytes = stats.size;
  console.log('Downloaded and saved ${fileSizeInBytes} bytes to ${file}')
  