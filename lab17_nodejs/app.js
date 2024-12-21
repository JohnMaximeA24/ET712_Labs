// import the http module
const fs = require("fs");
const http = require("http");

// create server
const server = http.createServer((request, response) => {
    // send the request through the index.html
    response.writeHead(200, {'content-type': 'text/html'});
    const readStream = fs.createReadStream(__dirname + '/index.html');

    // Piping
    readStream.pipe(response);

    // Send the request to a json file
    response.writeHead(200, {'content-type': 'application/json'})
    
    // JSON data
    const user = {
        name: "Peter Pan",
        email: "peterpan@neverland.com"
    };

    // piping
    response.end(JSON.stringify(user));
});

// server listening to port 3000
server.listen(3000, function(){
    console.log("Server is running");
});
