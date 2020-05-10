import moment from 'moment';
import fs from 'fs';
import readline from 'readline';

const archiveError = delay => {
    setTimeout(() => {
        const readerStream = fs.createReadStream('error.txt');
        const rl = readline.createInterface({
            input: readerStream,
        });
        rl.on('line', function (line) {
            const data = JSON.parse(line);
            fs.appendFile(`Log_from_${moment().format("dddd, MMMM Do YYYY")}.txt`, JSON.stringify({
                message: data.message,
                code: data.code,
                time: data.time,
            }) + '\n', (err) => {
                if (err) throw err;
            });
        });
        rl.on('close', function () {
            fs.unlink('error.txt', function () {
                if (fs.existsSync('error.txt')) {
                    console.log('Error. File does not exist');
                }
            });
        });
        archiveError(24 * 60 * 60 * 1000);
    }, delay);
};

module.exports = archiveError(100000);