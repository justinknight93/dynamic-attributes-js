var express = require("express");
 
var app = express();
 
app.use(express.static('public'));
 
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/json', express.static(__dirname + '/public/json'));
 
var server = app.listen(8100, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});