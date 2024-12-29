// Retrieve token and username from localStorage
let token = localStorage.getItem("token");
const BACKENDURL = "http://localhost:3000/";
// Redirect if not logged in
if (!token) {
  window.location.href = "login.html";
}

// Display username
document.getElementById("username").textContent =
  localStorage.getItem("username");

// Logout functionality
document.getElementById("logout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "login.html";
});

// Fetch and display food entries
const loadEntries = async () => {
  try {
    const res = await fetch(`${BACKENDURL}food/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      const entries = await res.json();
      const tbody = document.getElementById("entries");
      const totalCaloriesElement = document.getElementById(
        "total-calories-value"
      );

      // Clear previous entries
      tbody.innerHTML = "";

      let totalCalories = 0;

      entries.forEach((entry) => {
        const row = `<tr>
          <td>${new Date(entry.date).toLocaleDateString()}</td>
          <td>${entry.foodName}</td>
          <td>${entry.quantity}</td>
          <td>${entry.calories}</td>
        </tr>`;
        tbody.innerHTML += row;

        // Calculate total calories
        totalCalories += entry.calories;
      });

      // Update total calories display
      totalCaloriesElement.textContent = totalCalories;
    } else {
      alert("Failed to load entries. Please try again.");
    }
  } catch (error) {
    console.error("Error loading entries:", error);
    alert("An error occurred while fetching entries.");
  }
};

// Load entries on page load
loadEntries();

// Add a new food entry
document.getElementById("food-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form input values
  const date = document.getElementById("date").value;
  const foodName = document.getElementById("foodName").value;
  const quantity = document.getElementById("quantity").value;
  const calories = document.getElementById("calories").value;

  try {
    const res = await fetch(`${BACKENDURL}food/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ date, foodName, quantity, calories }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error response:", errorData);
      alert("Error adding entry. Please check your input and try again.");
    }

    if (res.ok) {
      alert("Entry added successfully!");
      // Reload entries to reflect the new addition
      loadEntries();
    } else {
      alert("Error adding entry. Please check your input and try again.");
    }
  } catch (error) {
    console.error("Error adding entry:", error);
    alert("An error occurred while adding the entry.");
  }
});
