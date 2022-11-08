const fs = require('fs');
const { parse } = require('csv-parse');
const { logger } = require('./log');

module.exports.getCSVContents = async (filepath) => {
    const data = [];
    let rowCount = 0;

    return new Promise(function(resolve, reject) {
        fs.createReadStream(filepath)
            .pipe(parse({ delimiter: ',', from_line: 2 }))
            .on('error', (error) => {
                reject(error)
            })
            .on('data', (row) => {
                data.push(row);
                rowCount ++;
            })
            .on('end', () => {
                logger.info('readCSV - ' + filepath + ' - ' + rowCount);
                resolve(data)
            });
    });
}

module.exports.getTokenBalanceFromCSV = async (filepath) => {
    const tokens = {};
    let rowCount = 0;
    return new Promise(function(resolve, reject) {
        fs.createReadStream(filepath)
            .pipe(parse({ delimiter: ',', from_line: 2 }))
            .on('error', error => {
                reject(error);
            })
            .on('data', (row) => {
                rowCount ++;
                if (!tokens.hasOwnProperty(row[2])) {
                    tokens[row[2]] = 0;
                }
                if (row[1] === 'DEPOSIT') {
                    tokens[row[2]] += Number(row[3]);
                } else {
                    tokens[row[2]] -= Number(row[3]);
                }
            })
            .on('end', () => {
                logger.info('readCSV - ' + filepath + ' - ' + rowCount);
                resolve(tokens)
            });
    });
}