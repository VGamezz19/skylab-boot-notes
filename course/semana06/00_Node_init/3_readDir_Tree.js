const fs = require('fs')
const file = process.argv[2]

function readDir(path = './', encoding)  {
    return new Promise((resolve, reject) => {
        fs.readdir(path, encoding, function (err, data) {
            if (err) return reject(err)
            let _data = {
                data,
                path
            }
            return resolve(_data)
        });
    })
}
readDir(file, 'utf-8')
    .then(res => {
        console.log(res.path)
        return res.data.map((e, i, data) => {
            i === data.length - 1 ? console.log('└── ' + e) : console.log('├── ' + e)
            return e
        })
    })
    // .then(console.log)
    .catch(console.error)