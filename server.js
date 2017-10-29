///////////////////////////////////////////////////////////////////////////////////////////////
//    Project name: Aspire
//    File name: server.js
//    Description: This file should be run on the nodejs command line prompt. This file will
//                 create a local http server on which we will deploy our application. This
//                 server will listen to all the requests at a default port: 8080.
//    Naming Standard used for variables and functions: Camel case
//    Submission Date: 04/26/207
//
//    Author name: Zohra Nadaf
//    Semester: Spring, 2017
//    Lecturer's name: Sunae Shin
//    Subject: Advanced Software Engineering
//    Course Id: CS 5910
//    CRN: 22797
//////////////////////////////////////////////////////////////////////////////////////////////

var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer( function (request, response) {  

   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         /* HTTP Status: 404 : NOT FOUND
            Content Type: text/plain*/
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {
         /*Page found     
           HTTP Status: 200 : OK
           Content Type: text/plain*/
         response.writeHead(200, {'Content-Type': 'text/html'});  
         
         // Write the content of the file to response body
         response.write(data.toString());    
      }
      // Send the response body 
      response.end();
   });   
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');