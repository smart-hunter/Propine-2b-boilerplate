## Answer
I organized the project with three components.

The main component has index.js and can be entered by adding the csv file name argument to the command. 
You can empty the file name and that will be "transactions" by default.

Next, readCSV.js and price.js were created.

readCSV.js has a function of reading csv data to return whole data and a function of calculating and returning the balance of tokens.
You can call getCSVContents function of readCSV.js in index.js and calculate the balance of tokens, but this means that the amount of computation is doubled.
So I added a second function to make the computation smaller in readCSV.js
getTokenBalanceFromCSV function returns balance of tokens.

Through price.js, we can enter tokenSymbol as an argument and obtain usd price.

Finally, in index.js, we calculate the total profile value.

### Guide
To read ```data/transactions.csv``` and run the process
```
npm run start
```
or 
```
npm run start transactions
```

You can see this now.
```

> 2b-boilerplate@1.0.0 start
> node index.js "transactions"

Run script ...
balanceOfTokens:  {
  BTC: 39851.199060999104,
  ETH: 30572.309748000236,
  XRP: 29560.412992000474
}
BTC 18521.19
ETH 1328.58
XRP 0.4036
End script...
Profile Value:  778721319.4042677

```

To read special csv file (e.g. ```data/custom.csv```) and run the process
```
npm run start <filename>
```
e.g.
```
npm run start custom
```

## Question 1 - Programming
_We're looking at your programming ability. It must not only work, it should be maintainable._

Let us assume you are a crypto investor. You have made transactions over a period of time which is logged in a CSV file at the [data directory](https://raw.githubusercontent.com/Propine/2b-boilerplate/master/data/transactions.csv). Write a command line program that returns the latest portfolio value per token in USD

The program should be ran like this

```
npm run start
```

On running, it should return the latest portfolio value per token in USD

The CSV file has the following columns
 - timestamp: Integer number of seconds since the Epoch
 - transaction_type: Either a DEPOSIT or a WITHDRAWAL
 - token: The token symbol
 - amount: The amount transacted

Portfolio means the balance of the token where you need to add deposits and subtract withdrawals. You may obtain the exchange rates from [cryptocompare](https://min-api.cryptocompare.com/documentation) where the API is free. You should write it in Node.js as our main stack is in Javascript/Typescript and we need to assess your proficiency.


## Submission

Please take no more than 2 hours to finish. We do not track time, hence you can start and end at your own time. Your answers should comprise of the following

  - Source code that you used for deriving the results
  - README that explains various design decisions that you took.

Commit your answers in a private Github repository(it's free), please do not fork as other candidates will see your answers. Add Zan(liangzan), Ben(BenPropine) as collaborators then inform us that it is done at zan@propine.com, ben.nguyen@propine.com.
