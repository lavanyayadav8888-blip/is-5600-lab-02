/* add your code here */
const userList = document.querySelector(".user-list");

function loadUsers() {
  userList.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.firstname} ${user.lastname}`;
    
    li.addEventListener("click", () => selectUser(user));
    
    userList.appendChild(li);
  });
}
let selectedUser = null;

function selectUser(user) {
  selectedUser = user;

  // Fill form
  document.getElementById("userID").value = user.id;
  document.getElementById("firstname").value = user.firstname;
  document.getElementById("lastname").value = user.lastname;
  document.getElementById("address").value = user.address;
  document.getElementById("city").value = user.city;
  document.getElementById("email").value = user.email;

  loadPortfolio(user);
}
const portfolioList = document.querySelector(".portfolio-list");

function loadPortfolio(user) {
  // clear old (keep headers)
  portfolioList.innerHTML = `
    <h3>Symbol</h3>
    <h3># Shares</h3>
    <h3>Actions</h3>
  `;

  user.portfolio.forEach(stock => {
    const symbol = document.createElement("div");
    symbol.textContent = stock.symbol;

    const shares = document.createElement("div");
    shares.textContent = stock.shares;

    const btn = document.createElement("button");
    btn.textContent = "View";

    btn.addEventListener("click", () => showStockDetails(stock.symbol));

    portfolioList.appendChild(symbol);
    portfolioList.appendChild(shares);
    portfolioList.appendChild(btn);
  });
}
function showStockDetails(symbol) {
  const stock = stocks.find(s => s.symbol === symbol);

  if (!stock) return;

  document.getElementById("stockName").textContent = stock.name;
  document.getElementById("stockSector").textContent = stock.sector;
  document.getElementById("stockIndustry").textContent = stock.industry;
  document.getElementById("stockAddress").textContent = stock.address;
  document.getElementById("logo").src = stock.logo;
}
document.getElementById("btnSave").addEventListener("click", (e) => {
  e.preventDefault();

  if (!selectedUser) return;

  selectedUser.firstname = document.getElementById("firstname").value;
  selectedUser.lastname = document.getElementById("lastname").value;
  selectedUser.address = document.getElementById("address").value;
  selectedUser.city = document.getElementById("city").value;
  selectedUser.email = document.getElementById("email").value;

  loadUsers(); // refresh list
});
