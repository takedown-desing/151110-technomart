var links = document.querySelectorAll(".catalog-item-order");
var popup = document.querySelector(".modal-cart");
var close = popup.querySelector(".modal-close");
var dismiss = popup.querySelector(".button-dismiss");

var mapLink = document.querySelector(".contacts-map-link");

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
	});
};

function closePopup(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
}

close.addEventListener("click", closePopup);

dismiss.addEventListener("click", closePopup);