// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        var rich = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        console.log(rich);
        return rich;
    }
    else if (currency <= 0) {
        console.log(exchange);
        return {};
    }
    else {
        var exchange = {};
        let H = Math.floor(currency/50);
            if (H>0) {exchange.H = H};
        let Q = Math.floor(currency%50/25);
            if (Q>0) {exchange.Q = Q};
        let D = Math.floor(currency%50%25/10);
            if (D>0) {exchange.D = D};
        let N = Math.floor(currency%50%25%10/5);
            if (N>0) {exchange.N = N};
        let P = Math.floor(currency%50%25%10%5/1);
            if (P>0) {exchange.P= P};
        return exchange;
    }   
    // Return an object containing the minimum number of coins needed to make change
}
