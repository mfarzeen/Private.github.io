// Toggle the visibility of the dropdown section
document.getElementById("mainButton").addEventListener("click", function () {
    const dropdownSection = document.getElementById("dropdownSection");
    const clickIndicator = document.getElementById("clickIndicator");

    dropdownSection.classList.toggle("hidden");

    if (!dropdownSection.classList.contains("hidden")) {
        clickIndicator.style.display = "none";
    }
});

// Function to reveal the corresponding section
function revealSection(id) {
    // Hide all page sections first
    document.querySelectorAll(".page-section").forEach((section) => {
        section.classList.add("hidden");
    });

    // Show the selected section
    const section = document.getElementById(id);
    if (section) {
        section.classList.remove("hidden");
    }
}
