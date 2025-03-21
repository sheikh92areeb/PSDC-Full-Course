const apiUrl = "http://localhost:3000/users";
const userTableBody = document.getElementById("userTableBody");
const userForm = document.getElementById("userForm");
const userIdInput = document.getElementById("userId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Fetch and display users in a modern table
async function fetchUsers() {
    userTableBody.innerHTML = "";
    const res = await fetch(apiUrl);
    const users = await res.json();

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit" onclick="editUser('${user.id}', '${user.name}', '${user.email}')">Edit</button>
                <button class="delete" onclick="deleteUser('${user.id}')">Delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

// Add or update user
userForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = userIdInput.value;
    const name = nameInput.value;
    const email = emailInput.value;

    const userData = { name, email };

    if (id) {
        // Update user
        await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
    } else {
        // Add new user
        await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
    }

    userForm.reset();
    fetchUsers();
});

// Edit user
function editUser(id, name, email) {
    userIdInput.value = id;
    nameInput.value = name;
    emailInput.value = email;
}

// Delete user
async function deleteUser(id) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchUsers();
}

// Load users on page load
fetchUsers();