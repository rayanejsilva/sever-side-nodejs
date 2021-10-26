// Basic node server
const http = require ('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', "application/json" );
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200); //status code HTTP 200 - ok
    let dataObj = {"id": "123", "name": "Bob", "email": "bob@work.org"};
    // When sending data to a web server, the data has to be a string
    let data = JSON.stringify(dataObj); // Convert a JavaScript object into a string
    res.end(data);

});

server.listen(1234, () => {
    console.log("listening on port 1234"); // http://localhost:1234/ API address in the local machine
})