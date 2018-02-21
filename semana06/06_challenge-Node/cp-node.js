const fs = require('fs')
const rl = require('readline');
const path = require('path')
const [node, ourPath, fromCp, toCp] = process.argv
const nameEjecutor = process.env.LOGNAME

const ask = function (question, callback) {
    var prompt = rl.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    prompt.question(question + '\n', (answer) => {
        callback(answer);
        prompt.close();
    });
}

if (!fs.existsSync(fromCp)) return console.error(`🚨 ${fromCp} incorrect path`)
if (fs.existsSync(toCp)) return console.error(`🚨 Ey! ${path.basename(toCp)} exist!!`)

ask(`\nHello ${nameEjecutor} ✨ you want CP 📂 ${fromCp} to 📂 ${toCp} ? [YES : NO]`, function (answer) {

    if (answer.toLowerCase() === 'yes' || answer === '') {
        const textFrom = fs.readFileSync(fromCp, 'utf-8')
        const streamTofile = fs.createWriteStream(toCp);

        streamTofile.once('open', () => { //solo se ejecutara una vez el evento.
            streamTofile.write(textFrom);
            streamTofile.end();
        });
    }
});