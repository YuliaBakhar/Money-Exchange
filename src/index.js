// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    let coin, pair = {}, exchangedMoney = {};
    const arrayOfCoins = [50, 25, 10, 5, 1];
    const arrayOfKeys = ['H', 'Q', 'D', 'N', 'P'];

    if (currency >= 10000) {
        pair = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        exchangedMoney = {...exchangedMoney, ...pair};
    }

    else arrayOfCoins.forEach((element, i) => {
        coin = Math.floor(currency / element);
        if (coin > 0) {
            pair[arrayOfKeys[i]] = coin;
            exchangedMoney = {...exchangedMoney, ...pair};
            currency = currency % element;
        }
    });

   

    return exchangedMoney;
}
