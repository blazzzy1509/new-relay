var net = require('net');
var mySocket;
var server = net.createServer(function(socket) { 
mySocket = socket; 
mySocket.on("connect", onConnect);
mySocket.on("data", onData);
 });
  function onConnect() { 
  	console.log("Connected"); 
  	} 
  	function onData(d) { 
  		var dd = d.toString()
   mysocket.write(' ' +  dd)

        	   } 
 server.listen(5566, "localhost");