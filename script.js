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

  const logoEl = document.createElement("img");
  logoEl.className = "logo";
  logoEl.src = stock.logoUrl;
  logoEl.alt = stock.name;

  const nameAndTickerDivEl = document.createElement("div");
  nameAndTickerDivEl.className = "nameAndTicker";

  stocksLineEl.appendChild(logoEl);
  stocksTableEl.appendChild(stocksLineEl);
});

containerEl.appendChild(stocksTableEl);
