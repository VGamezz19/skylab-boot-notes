//execute node 2_readFile.js 2_readFile.js
const fs = require('fs')
const file = process.argv[2]

// //1
// fs.readFile(file, function (err, data) {
//     if (err) throw err;
//     console.log(data.toString())
// });

// //2
// fs.readFile(file, {
//     encoding: 'utf-8'
// }, function (err, data) {
//     if (err) throw err;
//     console.log(data)
// });

// //3
// fs.readFile(file, 'utf-8', function (err, data) {
//     if (err) throw err;

//     console.log(data)
// });

//   Buffer objects are Node's way of efficiently representing arbitrary  
//   arrays of data, whether it be ascii, binary or some other format.  
//   Buffer objects can be converted to strings by simply calling the  
//   toString() method on them. e.g. var str = buf.toString().

//4
// function readFile (path,encoding,callback) {
//     fs.readFile(path, 'utf-8', function (err, data) {
//         if (err) throw new Error ('Err-IO-ASYNC');

//         return callback(data)
//     });
// }

// try {
//     readFile(file, 'utf-8', (data) => console.log(data))
// } catch(err) {
//     console.error(err)
// }

//5

function readFile(path, encoding)  {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, function (err, data) {
            if (err) return reject(err)

            return resolve(data)
        });
    })
}

readFile(file, 'utf-8')
    .then(console.log)
    .catch(console.error)