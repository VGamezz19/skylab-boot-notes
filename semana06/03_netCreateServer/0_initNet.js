const net = require('net')
const server = net.createServer((client) => {
    console.log('client connected');
  //  client.end(()=>{console.log("TALUEEEEEE")})
    client.on('close', () => {
        console.log(client.id,'client disconnected');
    });
    // client.write('hello\r\n');
    // client.pipe(client);
});
server.on('error', (err) => {
    throw err;
});
server.listen(8124, () => {
    console.log(`server listen`);
});
