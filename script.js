const toggleSwitch = document.getElementById("mode-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

// Apply the saved theme on initial load
document.documentElement.setAttribute("data-theme", currentTheme);
if (currentTheme === "dark") {
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", function (event) {
  const theme = event.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme); // makes it persitent if the refreshes browser window
});
