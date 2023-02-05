const $btnMenu = document.querySelector(".menu-btn");
const $contArea = document.querySelector(".content_wrapper");

$btnMenu.addEventListener("click", function () {
	$contArea.classList.toggle("active");
});
