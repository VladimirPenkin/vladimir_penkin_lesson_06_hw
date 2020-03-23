window.addEventListener("load", function() {

	let ball = document.querySelector("#ball");
	let btn = document.querySelector("button");
	let start;
	let position = 0;
	let screenWidth = screen.width - 200;

	ball.addEventListener("click", startMove);
	btn.addEventListener("click", stop);

	function startMove() {

		start = setInterval(rolling, 5);

		function rolling() {
			if (position == screenWidth) {
				position = 0;
			} else {
				++position
				ball.style = `left: ${position}px`
			};
		};

	};

	function stop() {
		clearInterval(start);
	};

});