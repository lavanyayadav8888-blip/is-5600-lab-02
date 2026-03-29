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
