//  Synchronous or blocking 
// -line by line execution


// Asynchronous or non-blocking
// -line by line execution not guranteed
// callbacks will fire

const fs = require("fs");
fs.readFile("tryep","utf-8", (err,data)=>{
    console.log(data);

});
console.log("Send rohan this message");