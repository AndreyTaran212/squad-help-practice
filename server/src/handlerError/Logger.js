import moment from 'moment';
import fs from 'fs';

export default function (err) {
    const error = {
        message: err.message,
        time: moment().format('x'),
        code: err.code,
        stackTrace: err.stack,
    };
    fs.appendFile('error.txt', JSON.stringify(error), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
};
