const net = require('net')

const client = new net.Socket();

client.connect(3000, 'localhost', () => {   
    client.write('Vota Tony Pepperoni!!')
})

client.on('data', data => console.log(data.toString()))
