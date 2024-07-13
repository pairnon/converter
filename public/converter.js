
const btcURL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
const ethURL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';

const rounding_decimal_places = 8;

document.getElementById('USDtoBTC').addEventListener('submit', function(event) {
    event.preventDefault();
    const usdInput = document.getElementById('USDtoBTC_input').value;
    
    fetch(btcURL)
        .then(response => response.json())
        .then(data => {
            const btcAmount = usdInput / data.USD;
            document.getElementById('USDtoBTC_output').innerText = `BTC: ${btcAmount.toFixed(rounding_decimal_places)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('USDtoBTC_output').innerText = 'Error fetching data.';
        });
});

document.getElementById('BTCtoUSD').addEventListener('submit', function(event) {
    event.preventDefault();
    const btcInput = document.getElementById('BTCtoUSD_input').value;
    
    fetch(btcURL)
        .then(response => response.json())
        .then(data => {
            const usdAmount = btcInput * data.USD;
            document.getElementById('BTCtoUSD_output').innerText = `USD: ${usdAmount.toFixed(rounding_decimal_places)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('BTCtoUSD_output').innerText = 'Error fetching data.';
        });
});

document.getElementById('SATtoBTC').addEventListener('submit', function(event) {
    event.preventDefault();
    const satInput = document.getElementById('SATtoBTC_input').value;
    const btcAmount = satInput / 100000000;
    document.getElementById('SATtoBTC_output').innerText = `BTC: ${btcAmount}`;
});

document.getElementById('BTCtoSAT').addEventListener('submit', function(event) {
    event.preventDefault();
    const btcInput = document.getElementById('BTCtoSAT_input').value;
    const satAmount = btcInput * 100000000;
    document.getElementById('BTCtoSAT_output').innerText = `Sats: ${satAmount}`;
});

document.getElementById('USDtoETH').addEventListener('submit', function(event) {
    event.preventDefault();
    const usdInput = document.getElementById('USDtoETH_input').value;
    
    fetch(ethURL)
        .then(response => response.json())
        .then(data => {
            const ethAmount = usdInput / data.USD;
            document.getElementById('USDtoETH_output').innerText = `ETH: ${ethAmount.toFixed(rounding_decimal_places)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('USDtoETH_output').innerText = 'Error fetching data.';
        });
});

document.getElementById('ETHtoUSD').addEventListener('submit', function(event) {
    event.preventDefault();
    const ethInput = document.getElementById('ETHtoUSD_input').value;
    
    fetch(ethURL)
        .then(response => response.json())
        .then(data => {
            const usdAmount = ethInput * data.USD;
            document.getElementById('ETHtoUSD_output').innerText = `USD: ${usdAmount.toFixed(rounding_decimal_places)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('ETHtoUSD_output').innerText = 'Error fetching data.';
        });
});