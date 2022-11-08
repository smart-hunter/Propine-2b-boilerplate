const fs = require("fs");
const { parse } = require("csv-parse");

module.exports.getCSVContents = async function (filepath) {
    const data = [];

    return new Promise(function(resolve, reject) {
        fs.createReadStream(filepath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on('error', error => reject(error))
            .on('data', row => data.push(row))
            .on('end', () => {
                resolve(data)
            });
    });
}
