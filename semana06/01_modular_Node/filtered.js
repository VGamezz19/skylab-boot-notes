const fs = require('fs')
const path = require('path')

module.exports = function(_path, ext, callback) {
    fs.readdir(_path, (err, files) => {
        if (err) throw err

        const filtered = files.filter(file => path.extname(file) === `.${ext}`)
        callback(filtered)
    })
}