document.addEventListener("DOMContentLoaded", () => {
	loadCart();

	const form = document.getElementById("checkout-form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const name = document.getElementById("name").value.trim();
		const email = document.getElementById("email").value.trim();
		const address = document.getElementById("address").value.trim();
		const card = document.getElementById("card").value.trim();
		const cart = JSON.parse(localStorage.getItem("cart")) || [];

		if (!name || !email || !address || !card) {
			alert("Please fill in all fields.");
			return;
		}

		if (cart.length === 0) {
			alert("Your cart is empty.");
			return;
		}

		localStorage.removeItem("cart");
		window.location.href = "confirmation.html";
	});
});
