async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const dataContainer = document.getElementById("api-data");

    try {
        const response =  await fetch(apiUrl);
        const users = await response.json();
        return users;
    } catch (error) {
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data";
    }

    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    users.forEach(function(user) {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}

dataContainer.appendChild(userList);
document.addEventListener("DOMContentLoaded", fetchUserData);