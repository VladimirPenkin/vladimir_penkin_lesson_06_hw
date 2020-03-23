window.addEventListener("load", function () {

	let btn = document.querySelector("button");
	btn.addEventListener("click", onTop);

	function onTop () {
		window.scrollTo(0, 0);
	};
});