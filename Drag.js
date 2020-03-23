window.addEventListener("load", function() {

	let dragDIV = document.querySelector("#dragDIV");

	dragDIV.onmousedown = function(event) {

		let shiftX = event.clientX - dragDIV.getBoundingClientRect().left;
		let shiftY = event.clientY - dragDIV.getBoundingClientRect().top;

		moveDIV(event.pageX, event.pageY);

		function moveDIV(pageX, pageY) {

			dragDIV.style.left = pageX - shiftX + 'px';
			dragDIV.style.top = pageY - shiftY + 'px';
		};

		function onMouseMove(event) {

			moveDIV(event.pageX, event.pageY);
		};

		document.addEventListener('mousemove', onMouseMove);

		dragDIV.onmouseup = function() {

			document.removeEventListener('mousemove', onMouseMove);
			dragDIV.onmouseup = null;
		};

	};

	dragDIV.ondragstart = function() {

		return false;
	};
	
});