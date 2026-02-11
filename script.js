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

  stocksLineEl.innerHTML = `<img src="${stock.logoUrl}" alt="${stock.name}" class="logo">`;

  stocksTableEl.appendChild(stocksLineEl);
});

containerEl.appendChild(stocksTableEl);
