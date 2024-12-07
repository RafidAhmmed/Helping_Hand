document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const loginContainer = document.getElementById("loginContainer");
    const loginLink = document.getElementById("loginLink");

    // Open the modal and fetch login form
    loginLink.addEventListener("click", async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("login.html");
            const loginHTML = await response.text();
            loginContainer.innerHTML = loginHTML;
            modal.classList.remove("hidden");
        } catch (error) {
            console.error("Error loading login page:", error);
        }
    });

    // Close the modal when clicking outside of the login container
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
