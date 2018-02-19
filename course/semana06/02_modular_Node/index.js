const filtered = require ('./filtered')

filtered("..", 'js', files => files.forEach(element =>  console.log(element)));