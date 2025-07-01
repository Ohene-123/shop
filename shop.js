document.addEventListener("DOMContentLoaded", function () {
	const buyButtons = document.querySelectorAll(".product-card button");

	buyButtons.forEach((button, index) => {
		button.addEventListener("click", function () {
			const productCard = button.closest(".product-card");
			const productName = productCard.querySelector("h3").textContent;
			const productPrice =
				productCard.querySelector(".price").textContent;

			console.log(productPrice);

			alert(`Thank you for buying ${productName} for ${productPrice}!`);
		});
	});
});
