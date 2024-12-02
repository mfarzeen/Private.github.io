// Toggle visibility of the dropdown section
document.getElementById("mainButton").addEventListener("click", function () {
    const dropdownSection = document.getElementById("dropdownSection");
    const clickIndicator = document.getElementById("clickIndicator");

    // Show or hide the dropdown section
    dropdownSection.classList.toggle("hidden");

    // Hide the "Click This" indicator when clicked
    if (!dropdownSection.classList.contains("hidden")) {
        clickIndicator.style.display = "none";
    }
});

// Function to toggle individual dropdown texts
function toggleText(id) {
    const text = document.getElementById(id);
    text.classList.toggle("hidden");
}
