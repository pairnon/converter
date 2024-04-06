
const btcURL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
const ethURL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';

document.getElementById('USDtoBTC').addEventListener('submit', function(event) {
    event.preventDefault();
    const usdInput = document.getElementById('usd').value;
    
    fetch(btcURL)
        .then(response => response.json())
        .then(data => {
            const btcAmount = usdInput / data.USD;
            document.getElementById('btcValue').innerText = `BTC: ${btcAmount.toFixed(8)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('btcValue').innerText = 'Error fetching data.';
        });
});

document.getElementById('BTCtoUSD').addEventListener('submit', function(event) {
    event.preventDefault();
    const btcInput = document.getElementById('btc').value;
    
    fetch(btcURL)
        .then(response => response.json())
        .then(data => {
            const usdAmount = btcInput * data.USD;
            document.getElementById('usdValue').innerText = `USD: ${usdAmount.toFixed(8)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('usdValue').innerText = 'Error fetching data.';
        });
});

document.getElementById('SATtoBTC').addEventListener('submit', function(event) {
    event.preventDefault();
    const satInput = document.getElementById('sats').value;
    const btcAmount = satInput / 100000000;
    document.getElementById('sbtcValue').innerText = `BTC: ${btcAmount}`;
});

document.getElementById('BTCtoSAT').addEventListener('submit', function(event) {
    event.preventDefault();
    const btcInput = document.getElementById('sbtc').value;
    const satAmount = btcInput * 100000000;
    document.getElementById('satValue').innerText = `Sats: ${satAmount}`;
});

document.getElementById('USDtoETH').addEventListener('submit', function(event) {
    event.preventDefault();
    const usdInput = document.getElementById('eusd').value;
    
    fetch(ethURL)
        .then(response => response.json())
        .then(data => {
            const ethAmount = usdInput / data.USD;
            document.getElementById('ethValue').innerText = `ETH: ${ethAmount.toFixed(8)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('ethValue').innerText = 'Error fetching data.';
        });
});

document.getElementById('ETHtoUSD').addEventListener('submit', function(event) {
    event.preventDefault();
    const ethInput = document.getElementById('eth').value;
    
    fetch(ethURL)
        .then(response => response.json())
        .then(data => {
            const usdAmount = ethInput * data.USD;
            document.getElementById('eusdValue').innerText = `USD: ${usdAmount.toFixed(8)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('eusdValue').innerText = 'Error fetching data.';
        });
});