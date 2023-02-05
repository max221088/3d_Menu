const $btnMenu = document.querySelector(".menu-btn");
const $contArea = document.querySelector(".content_wrapper");
const $btnExit = document.querySelector(".exit_btn");
const $navMenu = document.querySelector(".nav_menu");

$btnMenu.addEventListener("click", function () {
	$contArea.classList.add("active");
	$navMenu.classList.add("active");
});
$btnExit.addEventListener("click", function () {
	$contArea.classList.remove("active");
	$navMenu.classList.remove("active");
});
