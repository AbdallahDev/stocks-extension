import { getStocks } from "./stocks.js";

const containerEl = document.getElementById("container");
const updatedTimeEl = document.createElement("div");

renderApp();
setInterval(renderApp, 5000);

function renderApp() {
  const stocks = getStocks();
  const now = new Date();
  const formattedTime = now.toLocaleString("en-JO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  updatedTimeEl.innerHTML = `<div id="updatedTime">Updated ${formattedTime}</div>`;

  containerEl.innerHTML = updatedTimeEl.innerHTML + renderStocksTable(stocks);
}

function renderStocksTable(stocks) {
  const stocksTableEl = document.createElement("div");
  stocksTableEl.id = "stocksTable";

  stocks.forEach((stock, index) => {
    let {
      logoUrl,
      name,
      ticker,
      price,
      currency,
      change_price: changePrice,
      change_percent: changePercent,
    } = stock;

    const stockLineEl = document.createElement("div");
    stockLineEl.classList.add("stockLine");

    stockLineEl.style.backgroundColor = index % 2 === 0 ? "#F0F0F0" : "";

    //this code makes the stock line html
    stockLineEl.innerHTML = `
        <div class="logoAndNameAndTicker">
          <img src="${logoUrl}" alt="${name}" class="logo">
          <div class="nameAndTicker">
            <div class="name">${name}</div>
            <div class="ticker">${ticker}</div>
          </div>
        </div>
        <div class="priceAndChange">
          <div class="priceAndCurrency">
            <div class="price">${price}</div>
            <div class="currency">${currency}</div>
          </div>
          <div class="changePriceAndPercent">
            <div class="changePrice" style="color:${setChangeColor(changePrice)};">
              ${setChangeSign(changePrice)}${changePrice}
            </div>
            <div class="changePercent" style="color:${setChangeColor(changePercent)};">
              ${setChangeSign(changePercent)}${changePercent}%
            </div>
          </div>
        </div>`;

    stocksTableEl.appendChild(stockLineEl);
  });

  return stocksTableEl.innerHTML;
}

function setChangeSign(changeValue) {
  return changeValue > 0 ? "+" : " ";
}

function setChangeColor(changeValue) {
  // prettier-ignore
  return changeValue > 0 ? "#2E7D2E" 
       : changeValue < 0 ? "#D93E30" 
       : "#888888";
}
