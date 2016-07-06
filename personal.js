var topBar = document.querySelectorAll(".top")[0];
console.log("top",topBar);

document.body.onscroll= function () {
	if (document.body.scrollTop>500) {
		topBar.classList.add("scroll");
	}
}