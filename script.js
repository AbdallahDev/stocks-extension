import { stocks } from "./stocks.js";

const containerEl = document.getElementById("container");
const updatedTimeEl = document.createElement("div");

renderApp();
setInterval(renderApp, 5000);

function renderApp() {
  const now = new Date();
  const formattedTime = now.toLocaleString("en-JO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  updatedTimeEl.innerHTML = `<div id="updatedTime">Updated ${formattedTime}</div>`;

  containerEl.innerHTML = updatedTimeEl.innerHTML + renderStocksTable();
}

function renderStocksTable() {
  const stocksTableEl = document.createElement("div");
  stocksTableEl.id = "stocksTable";

  stocks.forEach((stock, index) => {
    const stocksLineEl = document.createElement("div");
    stocksLineEl.classList.add("stockLine");

    if (index % 2 == 0) stocksLineEl.style.backgroundColor = "#F0F0F0";

    //this code makes the stock line html
    stocksLineEl.innerHTML = `
  <div class="logoAndNameAndTicker">
    <img src="${stock.logoUrl}" alt="${stock.name}" class="logo">
    <div class="nameAndTicker">
      <div class="name">${stock.name}</div>
      <div class="ticker">${stock.ticker}</div>
    </div>
  </div>
  <div class="priceAndChange">
    <div class="priceAndCurrency">
      <div class="price">${stock.price}</div>
      <div class="currency">${stock.currency}</div>
    </div>
    <div class="changePriceAndPercent">
      <div class="changePrice" style="color:${setChangeColor(stock.change_price)};">
        ${setChangeSign(stock.change_price)}${stock.change_price}
      </div>
      <div class="changePercent" style="color:${setChangeColor(stock.change_percent)};">
        ${setChangeSign(stock.change_percent)}${stock.change_percent}%
      </div>
    </div>
  </div>`;

    stocksTableEl.appendChild(stocksLineEl);
  });

  return stocksTableEl.innerHTML;
}

function setChangeColor(changeValue) {
  if (changeValue > 0) return "#2E7D2E";
  else if (changeValue < 0) return "#D93E30";
  else return "#888888";
}

function setChangeSign(changeValue) {
  if (changeValue > 0) {
    return "+";
  } else return "";
}
