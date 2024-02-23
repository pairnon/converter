function updateTime() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	var currentTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	document.getElementById('currentTime').innerHTML = currentTime;
}

function updateUTCTime() {
    var now = new Date();
    var utcHours = now.getUTCHours();
    var utcMinutes = now.getUTCMinutes();
    var utcSeconds = now.getUTCSeconds();
    utcHours = utcHours < 10 ? '0' + utcHours : utcHours;
    utcMinutes = utcMinutes < 10 ? '0' + utcMinutes : utcMinutes;
    utcSeconds = utcSeconds < 10 ? '0' + utcSeconds : utcSeconds;
    var currentUTCTime = utcHours + ':' + utcMinutes + ':' + utcSeconds;
    document.getElementById('currentUTCTime').innerHTML = currentUTCTime;
}

updateTime();
setInterval(updateTime, 1000);

updateUTCTime();
setInterval(updateUTCTime, 1000);

function getBitcoinPrice() {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('btcprice').innerHTML = "$" + data.USD;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('btcprice').innerText = 'Error fetching data.';
        });
}

function getEtherPrice() {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ethprice').innerHTML = "$" + data.USD;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('ethprice').innerText = 'Error fetching data.';
        });
}

getBitcoinPrice()
setInterval(getBitcoinPrice, 30000); // 30 seconds

getEtherPrice()
setInterval(getEtherPrice, 30000); // 30 seconds