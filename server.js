//require / import the htrtp module
var http = require("http");

//define a port to listen for incoming reequest
var PORT = 7000;
var PORT1 = 7500;

function handleRequest(request ,response){

    //send the below string to the client
    response.end("you are beautiful, like your mother " + request.url)
}

function handleRequest1(request ,response){
    
        //send the below string to the client
        response.end("you are hidious like your father " + request.url)
    }
//create server var to call in listener
var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("server listening on: http://localhost: " + PORT );
})

var server7500 = http.createServer(handleRequest1);

server7500.listen(PORT1, function() {
    
        console.log("server listening on: http://localhost: " + PORT1 );
    })
