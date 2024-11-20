function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("currentTime").innerHTML = currentTime;
}

function updateUTCTime() {
  var now = new Date();
  var utcHours = now.getUTCHours();
  var utcMinutes = now.getUTCMinutes();
  var utcSeconds = now.getUTCSeconds();
  utcHours = utcHours < 10 ? "0" + utcHours : utcHours;
  utcMinutes = utcMinutes < 10 ? "0" + utcMinutes : utcMinutes;
  utcSeconds = utcSeconds < 10 ? "0" + utcSeconds : utcSeconds;
  var currentUTCTime = utcHours + ":" + utcMinutes + ":" + utcSeconds;
  document.getElementById("currentUTCTime").innerHTML = currentUTCTime;
}

updateTime();
setInterval(updateTime, 1000);

updateUTCTime();
setInterval(updateUTCTime, 1000);

function getBitcoinPrice() {
  fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("btcprice").innerHTML = "$" + data.USD;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("btcprice").innerText = "Error fetching data.";
    });
}

function getEtherPrice() {
  fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("ethprice").innerHTML = "$" + data.USD;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("ethprice").innerText = "Error fetching data.";
    });
}

getBitcoinPrice();
setInterval(getBitcoinPrice, 30000); // 30 seconds

getEtherPrice();
setInterval(getEtherPrice, 30000); // 30 seconds

function getBitcoinFees() {
  fetch("https://mempool.space/api/v1/fees/recommended")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("fasttx").innerHTML = data.fastestFee + " sat/vB";
      document.getElementById("midtx").innerHTML = data.halfHourFee + " sat/vB";
      document.getElementById("slowtx").innerHTML = data.hourFee + " sat/vB";
      document.getElementById("mintx").innerHTML = data.economyFee + " sat/vB";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("fasttx").innerText = "Error fetching data.";
      document.getElementById("midtx").innerText = "Error fetching data.";
      document.getElementById("slowtx").innerText = "Error fetching data.";
      document.getElementById("mintx").innerText = "Error fetching data.";
    });
}

getBitcoinFees();
setInterval(getBitcoinFees, 30000); // 30 seconds

function getDominances() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false",
  )
    .then((response) => response.json())
    .then((data) => {
      let btc_cap = 1;
      let eth_cap = 1;
      let total_cap = 1;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == "bitcoin") {
          btc_cap = data[i].market_cap;
        }
        if (data[i].id == "ethereum") {
          eth_cap = data[i].market_cap;
        }
        total_cap += data[i].market_cap;
      }
      document.getElementById("btcd").innerHTML = ((Number.parseFloat(btc_cap) / total_cap) * 100).toFixed(2) + "%";
      document.getElementById("ethd").innerHTML = ((Number.parseFloat(eth_cap) / total_cap) * 100).toFixed(2) + "%";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("ethprice").innerText = "Error fetching data.";
    });
}

getDominances();
