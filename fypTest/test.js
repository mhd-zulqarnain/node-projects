var Client = require('mysql').Client;
var client = new Client(); 
client.host ='mysql.2freehosting.com';
client.user = 'u478718511_oss';
client.password = 'parvi167';
console.log("connecting...");
client.connect(function(err, results) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
    console.log("connected.");
    clientConnected(client);
});

clientConnected = function(client)
{
	tableHasData(client);
}           


