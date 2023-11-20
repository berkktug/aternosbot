var http = require("http");
http.createServer(function(req, res){
res.write("Haren Uptime"); 
res.end();
}).listen(8080); 