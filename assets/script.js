const descriptions = document.querySelectorAll(".descriptions");

descriptions.forEach((description) => {
	description.addEventListener("click", function (e) {
		this.nextSibling.nextSibling.classList.toggle("show__para");
	});
});
