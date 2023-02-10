// Vars
const $btnMenu = document.querySelector(".menu-btn");
const $contArea = document.querySelector(".content_wrapper");
const $btnExit = document.querySelector(".exit_btn");
const $navMenu = document.querySelector(".nav_menu");
const $menuItems = document.querySelectorAll(".items");
const $innerCont = document.querySelector(".inner_content");
const routes = {
	404: "/pages/404.html",
	"#/": "/index.html",
	"#/about": "/pages/about.html",
	"#/contact": "/pages/contact.html",
	"#/gallery": "/pages/gallery.html",
	"#/partners": "/pages/partners.html",
};

// Controllers

function active() {
	$contArea.classList.add("active");
	$navMenu.classList.add("active");
}
function exit() {
	$contArea.classList.remove("active");
	$navMenu.classList.remove("active");
}
function liveReload(link) {
	let route = routes[link];
	fetch(route)
		.then(function (response) {
			return response.text();
		})
		.then(function (data) {
			let tamplate = data;
			exit();
			$innerCont.innerHTML = tamplate;
		});
}

// Innit section

history.pushState(null, null, routes["#/"]);
location.hash = "#/";

// Actions

$btnMenu.addEventListener("click", active);

$btnExit.addEventListener("click", exit);

$menuItems.forEach(function (el) {
	el.addEventListener("click", function () {
		let link = this.getAttribute("data-link");
		location.hash = link;
		//liveReload(link);
	});
});

window.addEventListener("hashchange", function () {
	liveReload(window.location.hash);
});
