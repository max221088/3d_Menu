const $btnMenu = document.querySelector(".menu-btn");
const $contArea = document.querySelector(".content_wrapper");
const $btnExit = document.querySelector(".exit_btn");
const $navMenu = document.querySelector(".nav_menu");
const $menuItems = document.querySelectorAll(".items");
const $innerCont = document.querySelector(".inner_content");
const routes = {
	404: "/pages/404.html",
	"/": "/index.html",
	"/about": "/pages/about.html",
	"/contact": "/pages/contact.html",
	"/gallery": "/pages/gallery.html",
	"/partners": "/pages/partners.html",
};

function exit() {
	$contArea.classList.remove("active");
	$navMenu.classList.remove("active");
}
function active() {
	$contArea.classList.add("active");
	$navMenu.classList.add("active");
}

$btnMenu.addEventListener("click", active);

$btnExit.addEventListener("click", exit);

$menuItems.forEach(function (el) {
	el.addEventListener("click", function () {
		let rout = this.getAttribute("data-link");
		console.log(rout);
		fetch(rout)
			.then(function (response) {
				return response.text();
			})
			.then(function (data) {
				let tamplate = data;
				$innerCont.innerHTML = tamplate;
				exit();
				console.log(tamplate);
			});
	});
});
