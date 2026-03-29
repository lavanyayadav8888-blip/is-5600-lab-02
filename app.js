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

