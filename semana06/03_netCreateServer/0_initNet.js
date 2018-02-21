const net = require('net')
const server = net.createServer((client) => {
    console.log(process.env)
    console.log(client.server.owner);

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
server.listen(8000, () => {
    console.log(`server listen`);
});
