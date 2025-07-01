// cart.js

function loadCart() {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	document.getElementById("cart-count").textContent = cart.reduce(
		(sum, item) => sum + item.quantity,
		0
	);
}

function showToast(message) {
	const toast = document.getElementById("toast");
	toast.textContent = `✔️ ${message}`;
	toast.classList.add("show");

	setTimeout(() => {
		toast.classList.remove("show");
	}, 2000);
}

function addToCart(name, price, image) {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	const existing = cart.find((item) => item.name === name);
	if (existing) {
		existing.quantity += 1;
	} else {
		cart.push({ name, price, quantity: 1, image });
	}

	localStorage.setItem("cart", JSON.stringify(cart));
	loadCart();

	showToast(`${name} added to cart`);
}

document.addEventListener("DOMContentLoaded", loadCart);
