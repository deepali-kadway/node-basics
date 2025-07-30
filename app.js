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

const { log } = require('console');
var http = require('http'); // Importing the http module

// () => {} is an arrow function, a Javascript which is used to replace traditional anonymous functions.
// createServer function takes a callback function as an argument
// The callback function takes two arguments: req (request) and res (response).
const server = http.createServer((req, res) => {
    //write a response to client (browser)
    // console.log('Request received');
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

//starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
    console.log('Server is running');
    
});
