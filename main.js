let body = document.getElementById("body");
let investment = document.getElementById("investment");
let cryptoPrice = document.getElementById("cryptoPrice");
let sellPrice = document.getElementById("sellPrice");
let fee = document.getElementById("fee");
let count = document.getElementById("count");
let netProfit = document.getElementById("netProfit");
let total = document.getElementById("total");

function darkMode(id) {
  if (id == "dark") {
    body.style.backgroundColor = "#333";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

function calc() {
  count.innerHTML = Number(investment.value) / Number(cryptoPrice.value);
  let result = Number(investment.value) / Number(cryptoPrice.value);
  netProfit.innerHTML =
    result * Number(sellPrice.value) -
    Number(fee.value) -
    Number(investment.value);

  let netProfitResult =
    result * Number(sellPrice.value) -
    Number(fee.value) -
    Number(investment.value);
  if (netProfitResult < 0) {
    netProfit.style.backgroundColor = "red";
  } else if (netProfitResult > 0) {
    netProfit.style.backgroundColor = "green";
  } else {
    netProfit.style.backgroundColor = "#666";
  }
  total.innerHTML = result * Number(sellPrice.value) - Number(fee.value);
}
