var http = require('http');
var url = require('url');
var fs = require('fs');
var timeStamp = require('./timeStamp');
var nodeEvents = require('./nodeEvent');

http.createServer(function(req,res){
    //File system response
    /*
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    */
    nodeEvents.nodeevents();
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1> Welcome to the Homepage! </h1>");
    res.write("The day and time is:" + timeStamp.timeStamp() + "<br>");
    res.write("This is the url you requested" + req.url + "<br>");
    var q = url.parse(req.url, true).query;
    var resTxt = q.id + " " + q.user;
    var qList = url.parse(req.url,true)
    console.log(qList.host);//localHost:3000
    console.log(qList.pathName);//users.html
    console.log(qList.search);//id and user
    res.end(resTxt);
    
}).listen(3030);