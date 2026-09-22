// ================================
// LINKUP — INTERACTIVE HOMEPAGE
// ================================

const discoverBtn = document.getElementById("discoverBtn");


// Scroll to connection options
discoverBtn.addEventListener("click", () => {

    document.getElementById("discover").scrollIntoView({
        behavior: "smooth"
    });

});


// Navigation links
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Connection cards
document.querySelectorAll(".connection-card").forEach(card => {

    const button = card.querySelector("button");

    button.addEventListener("click", () => {

        const type =
            card.querySelector("h3").textContent;

        alert(
            "You selected: " +
            type +
            "\n\nThe matching system will be added next."
        );

    });

});


// Join button
document.querySelector(".nav-btn").addEventListener("click", () => {

    alert(
        "LINKUP registration will be available soon."
    );

});


// Profile button
document.querySelector(".secondary-btn").addEventListener("click", () => {

    alert(
        "Profile creation will be added in the next version."
    );

});


// Small entrance animation
window.addEventListener("load", () => {

    document.querySelector(".hero").style.opacity = "1";

});
