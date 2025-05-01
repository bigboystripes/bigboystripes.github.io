document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("product-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.getElementById("close-modal");

    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const merchDiv = button.parentElement;
            const productImage = merchDiv.querySelector("img").src;
            const productTitle = merchDiv.querySelector("p:nth-of-type(1)").textContent;
            const productPrice = merchDiv.querySelector("p:nth-of-type(2)").textContent;

            modalImage.src = productImage;
            modalTitle.textContent = productTitle;
            modalPrice.textContent = productPrice;
            modalDescription.textContent = `This is the official product: ${productTitle}.`;

            modal.style.display = "block";
            modalOverlay.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    });

    modalOverlay.addEventListener("click", function () {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    });
});