// what is nOde JS?
// Node is an open source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
// Install node using the command: npm install -g node
// To check the version of node installed, use the command: node -v
// In the past, Javascript was used only for client-side(browser) scripting.
// With introduction of Node.js, JavaScript can now be run on a server(computer) as well.
//Node JS is built on Chrome V8 Javascript engine, firefox uses spidermonkey, and Ie uses Chakra.
// A web server is a software that listen for incoming request over the HTPP protocol and sends back a response.
// We can create a web server using Node.js via the http module.

//What are modules in Node?
//Modules are like libraries in Node JS. They are reusable pieces of code that can be imported into other files.
// There are byilt in modules provided by node and third party modules that can be installed using npm.

// any file in node is considered a module, giving us the aility to import and export code between files.
// var module = require("node:module");
// console.log(module);

//var, let, const are used to define variables of node modules.

//What are built in modules in Node?
// 1. http to create a web server
//2. fs: to work with the file in server file system (update, delete, read, write files)
//3. path: to work with file and directory paths
const path = require('path'); // Importing the path module
// __filename is a global object in node which givs the absolute path of the current file.
var x = path.parse(__filename); // Parsing the current file's path
console.log(x);
//4. os: to get information about the operating system
const os = require('os'); // Importing the os module
var type = os.type(); // Getting the type of operating system
console.log(type); // Logging the type of operating system
var freeMemory = os.freemem() // Getting the free amount memory in the system
var totalMemory = os.totalmem(); // Getting the total amount memory in the system
console.log(freeMemory);
console.log(totalMemory)
const ospath = require('ospath')
console.log(ospath.home());


// Install external modules using npm
// npm i <modue-name>
// For example, to install the express module, use the command: npm i express


var http = require('http'); // Importing the http module

// () => {} is an arrow function, a Javascript which is used to replace traditional anonymous functions.
// createServer function takes a callback function as an argument
// The callback function takes two arguments: req (request) and res (response).
const server = http.createServer((req, res) => {
    //write a response to client (browser)
    console.log('Request received');
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end('Hello, World!\n');
    res.end('{"message": "Hello world"})')
});

//starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
    console.log('Server is running');
    
});
