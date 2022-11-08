const { getCSVContents, getTokenBalanceFromCSV } = require('./readCSV');
const { getPrice } = require('./price');

const run = async function () {
    console.log('Run script ...');

    let fileName = 'transactions';
    if (process.argv.length === 3) {
        fileName = process.argv[2];
    }

    const balanceOfTokens = await getTokenBalanceFromCSV("data/" + fileName + ".csv");
    console.log('balanceOfTokens: ', balanceOfTokens);

    const tokenSymbols = Object.keys(balanceOfTokens);
    let profileValue = 0, i;
    for (i = 0; i < tokenSymbols.length; i++) {
        const priceData = await getPrice(tokenSymbols[i]);
        const price = priceData['USD'];
        console.log(tokenSymbols[i], price);
        profileValue += balanceOfTokens[tokenSymbols[i]] * price;
    }

    console.log('End script...');
    console.log('Profile Value: ', profileValue);

    return profileValue;
}

run();