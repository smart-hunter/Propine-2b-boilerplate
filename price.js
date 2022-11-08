const https = require('https');
const PRICE_API_ROOT = 'https://min-api.cryptocompare.com/data/price?tsyms=USD&fsym=';
const { logger } = require('./log');

module.exports.getPrice = async (tokenSymbols) => {
    const url = PRICE_API_ROOT + tokenSymbols;
    return new Promise((reslove, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                reslove(JSON.parse(data));
            });
            res.on('error', error => {
                logger.error(error);
            });
        });
    });
}

