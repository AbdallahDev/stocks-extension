import { stocks } from "./stocks.js";

const now = new Date();
const containerEl = document.getElementById("container");
const updatedTimeEl = document.createElement("div");
const formattedTime = now.toLocaleString("en-JO", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

updatedTimeEl.id = "updatedTime";
updatedTimeEl.textContent = "Updated " + formattedTime;
containerEl.appendChild(updatedTimeEl);

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
      <div class="changePrice">${stock.change_price}</div>
      <div class="changePercent">${stock.change_percent}</div>
    </div>
  </div>`;

  stocksTableEl.appendChild(stocksLineEl);
});

containerEl.appendChild(stocksTableEl);
