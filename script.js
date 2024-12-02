// Toggle the visibility of the dropdown section
document.getElementById("mainButton").addEventListener("click", function () {
    const dropdownSection = document.getElementById("dropdownSection");
    const clickIndicator = document.getElementById("clickIndicator");

    dropdownSection.classList.toggle("hidden");

    if (!dropdownSection.classList.contains("hidden")) {
        clickIndicator.style.display = "none";
    }
});

// Function to toggle individual sections
function revealSection(id) {
    const section = document.getElementById(id);

    // Check the current state of the section
    if (section.classList.contains("hidden")) {
        // Hide all other sections first
        document.querySelectorAll(".page-section").forEach((sec) => {
            sec.classList.add("hidden");
        });

        // Show the selected section
        section.classList.remove("hidden");
    } else {
        // Hide the section if it is already visible
        section.classList.add("hidden");
    }
}
